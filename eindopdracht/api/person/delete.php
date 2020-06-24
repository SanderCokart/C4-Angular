<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));

$conn = new mysqli("localhost", "root", "", "school_a4");
$conn->query("DELETE FROM person WHERE id = " . $data);

$conn->close();