package main

import (
	"bytes"
	"context"
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/globusdigital/soap"
)

// FooRequest a simple request
type CtAnmeldung struct {
	Benutzername string `xml:"Benutzername,attr"`
	Passwort     string `xml:"Passwort,attr"`
	Konzern      string `xml:"Konzern,attr"`
	Mandant      string `xml:"Mandant,attr"`
	Werk         string `xml:"Werk,attr"`
}
type InputUbersichtAbrechnungen struct {
	XMLName      xml.Name     `xml:"http://wilken.de/eai/1.0.0/ehrenamtsschnittstelle InputUebersichtAbrechnungen"`
	Konzern      string       `xml:"Konzern"`
	Mandant      string       `xml:"Mandant"`
	Werk         string       `xml:"Werk"`
	PersonNum    string       `xml:"PersonNum"`
	Abrechnungen []Abrechnung `xml:"WsAbrechnungen"`
	CtAnmeldung  CtAnmeldung  `xml:"anmeldung"`
}

type Abrechnung struct {
	Id                  string  `xml:"ID"`
	Abrechnungsnummer   string  `xml:"Abrechnungsnummer"`
	Status              string  `xml:"Status"`
	Abrechnungstext     string  `xml:"Abrechnungstext"`
	Belegdatum          string  `xml:"Belegdatum"`
	Faelligkeitsdatum   string  `xml:"Faelligkeitsdatum"`
	Valutadatum         string  `xml:"Valutadatum"`
	Buchungsschluessel  string  `xml:"Buchungsschluessel"`
	Dienststelle        string  `xml:"Dienststelle"`
	Abrechnungsart      string  `xml:"Abrechnungsart"`
	Umsatzsteuerpflicht bool    `xml:"Umsatzsteuerpflicht"`
	VertrittsID         string  `xml:"VertrittsID"`
	BankverbindungdsID  string  `xml:"BankverbindungdsID"`
	Bruttobetrag        float64 `xml:"Bruttobetrag"`
	SitzungVon          string  `xml:"SitzungVon"`
	SitzungsBis         string  `xml:"SitzungsBis"`
}

type Ergebnis struct {
	Ergebnis   bool   `xml:"Ergebnis"`
	Fehlercode string `xml:"Fehlercode"`
	Fehlertext string `xml:"Fehlertext"`
}

// FooResponse a simple response
type SoapResponse struct {
	WsAbrechnungen []Abrechnung `xml:"WsAbrechnungen"`
	Ergebnis       Ergebnis     `xml:"Ergebnis"`
}

func main() {
	str := `
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <InputUebersichtAbrechnungen xmlns="http://wilken.de/eai/1.0.0/ehrenamtsschnittstelle">
            <Konzern>P</Konzern>
            <Mandant>50</Mandant>
            <Werk> </Werk>
            <PersonNum>KRV00002</PersonNum>
            <AbrechnungsdatumVon>2022-02-02</AbrechnungsdatumVon>
            <AbrechnungsdatumBIS>2024-02-02</AbrechnungsdatumBIS>
            <anmeldung benutzername="SAAN" passwort="12345" konzern="P" mandant="50"/>
        </InputUebersichtAbrechnungen>
    </soap:Body>
</soap:Envelope>`
	req, err := http.NewRequest("POST", "https://p5etlnxora137.wsg.local:6789/wlk/EhrenamtsschnittstelleService?wsdl", bytes.NewBuffer([]byte(str)))
	req.Header.Set("Content-Type", "application/xml; charset=UTF-8")

	cl := &http.Client{}
	res, err := cl.Do(req)
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()
	bo, _ := ioutil.ReadAll(res.Body)
	fmt.Println("response Body:", string(bo))

	client := soap.NewClient("https://p5etlnxora137.wsg.local:6789/wlk/EhrenamtsschnittstelleService?wsdl", nil)
	request := &InputUbersichtAbrechnungen{
		Konzern:      "P",
		Mandant:      "50",
		Werk:         " ",
		PersonNum:    "KRV00002",
		Abrechnungen: make([]Abrechnung, 0),
		CtAnmeldung: CtAnmeldung{
			Benutzername: "SAAN",
			Passwort:     "12345",
			Konzern:      "P",
			Mandant:      "50",
			Werk:         " ",
		},
	}
	response := &SoapResponse{}
	httpResponse, err := client.Call(context.Background(), "abrechnungenVerwalten", &request, response)
	if err != nil {
		panic(err)
	}
	fmt.Println(request)
	log.Println(response, httpResponse.Status)
}
