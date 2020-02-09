<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "bedrijf");
$result = $conn->query("SELECT * FROM bedrijf");
$outp = "";

while ($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {
        $outp .= ",";
    }
    $outp .= '{"id":"' . $rs["id"] . '",';
    $outp .= '"bedrijfsnaam":"' . $rs["bedrijfsnaam"] . '",';
    $outp .= '"adres":"' . $rs["adres"] . '",';
    $outp .= '"woonplaats":"' . $rs["woonplaats"] . '",';
    $outp .= '"telNr":"' . $rs["telNr"] . '"}';
}

$outp = '{"records":[' . $outp . ']}';
$conn->close();

echo($outp);
?>