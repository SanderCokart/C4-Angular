<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data=json_decode(file_get_contents("php://input"));

$conn = new mysqli("localhost", "root", "", "school_a4");
$conn->query("UPDATE person SET voornaam='".$data->voornaam."',
achternaam='".$data->achternaam."', straat='".$data->straat."',
huisnummer='".$data->huisnummer."', postcode='".$data->postcode."',
woonplaats='".$data->woonplaats."', telefoonnummer='".$data->telefoonnummer."'
WHERE id='".$data->id."'");

$conn->close();