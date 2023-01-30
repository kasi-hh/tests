package main

import (
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	MakeRequest()
}

func MakeRequest() {
	resp, err := http.Get("https://p5etlnxora137.wsg.local:6789/wlk/EhrenamtsschnittstelleService?wsdl")
	if err != nil {
		log.Fatalln(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(string(body))
}
