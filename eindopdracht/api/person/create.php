<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//GET DATA FROM POST
$data=json_decode(file_get_contents("php://input"));

//CONNECT TO DATABASE AND QUERY INSERT
$conn = new mysqli("localhost", "root", "", "school_a4");
$conn->query("INSERT INTO person (voornaam, achternaam, straat,
  huisnummer, postcode, woonplaats, telefoonnummer) VALUES
  ('".$data->voornaam."', '".$data->achternaam."', '".$data->straat."', '".$data->huisnummer."',
     '".$data->postcode."', '".$data->woonplaats."', '".$data->telefoonnummer."')");


//CLOSE CONNECTION
$conn->close();