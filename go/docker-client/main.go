package main

import (
	"context"
	"fmt"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
	"github.com/docker/go-connections/nat"
	"log"
	"os"
)

func main() {
	cli, err := client.NewClientWithOpts()
	if err != nil {
		panic(err)
	}
	defer cli.Close()
	ctx := context.Background()
	dir, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	name := "kasi-test-nginx"
	stopAndRemoveContainer(cli, name)
	bind := fmt.Sprintf("%s/html:/usr/share/nginx/html", dir)
	binds := []string{bind}
	fmt.Println(binds)
	resp, err := cli.ContainerCreate(ctx, &container.Config{
		Image:        "nginx",
		ExposedPorts: nat.PortSet{"80": struct{}{}},
	}, &container.HostConfig{
		Binds:        binds,
		PortBindings: map[nat.Port][]nat.PortBinding{nat.Port("80"): {{HostIP: "127.0.0.1", HostPort: "9093"}}},
	}, nil, nil, name)
	if err != nil {
		panic(err)
	}

	if err := cli.ContainerStart(ctx, resp.ID, types.ContainerStartOptions{}); err != nil {
		panic(err)
	}
}

func stopAndRemoveContainer(client *client.Client, containername string) {
	ctx := context.Background()

	if err := client.ContainerStop(ctx, containername, nil); err != nil {
		log.Printf("Unable to stop container %s: %s", containername, err)
		return
	}

	removeOptions := types.ContainerRemoveOptions{
		RemoveVolumes: true,
		Force:         true,
	}

	if err := client.ContainerRemove(ctx, containername, removeOptions); err != nil {
		log.Printf("Unable to remove container: %s", err)
		return
	}

	return
}
