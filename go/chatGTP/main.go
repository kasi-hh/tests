package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type request struct {
	Model            string         `json:"model"`
	Prompt           string         `json:"prompt,omitempty"`
	Suffix           string         `json:"suffix,omitempty"`
	MaxTokens        int            `json:"max_tokens,omitempty"`
	Temperature      float32        `json:"temperature,omitempty"`
	TopP             float32        `json:"top_p,omitempty"`
	N                int            `json:"n,omitempty"`
	Stream           bool           `json:"stream,omitempty"`
	LogProbs         int            `json:"logprobs,omitempty"`
	Echo             bool           `json:"echo,omitempty"`
	Stop             []string       `json:"stop,omitempty"`
	PresencePenalty  float32        `json:"presence_penalty,omitempty"`
	FrequencyPenalty float32        `json:"frequency_penalty,omitempty"`
	BestOf           int            `json:"best_of,omitempty"`
	LogitBias        map[string]int `json:"logit_bias,omitempty"`
	User             string         `json:"user,omitempty"`
}

type response struct {
	ID      string   `json:"id"`
	Model   string   `json:"model"`
	Choices []choice `json:"choices"`
}

type choice struct {
	Text     string  `json:"text"`
	LogProb  float32 `json:"logprob"`
	Finished bool    `json:"finished"`
	Timestep int     `json:"timestep"`
	Warning  string  `json:"warning"`
}

func main() {
	// Set up the request body./*

	reqBody := request{
		Model:       "text-davinci-003",
		Prompt:      "What is Hamburg?",
		MaxTokens:   10,
		Temperature: 0,
		TopP:        1,
		N:           1,
		Stream:      false,
		LogProbs:    0,
	}
	reqBodyBytes, err := json.Marshal(reqBody)
	if err != nil {
		fmt.Println(err)
		return
	}

	// Set up the request.
	req, err := http.NewRequest("POST", "https://api.openai.com/v1/completions", bytes.NewBuffer(reqBodyBytes))
	if err != nil {
		fmt.Println(err)
		return
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer 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")

	// Send the request and get the response.
	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer res.Body.Close()
	// Parse the response.
	var resp response
	err = json.NewDecoder(res.Body).Decode(&resp)
	if err != nil {
		fmt.Println(err)
		return
	}

	// Print the response.
	for _, choice := range resp.Choices {
		fmt.Println(choice.Text)
	}
}
