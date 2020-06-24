<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//CONNECT TO DATABASE AND QUERY ALL
$conn = new mysqli("localhost", "root", "", "school_a4");
$result = $conn->query("SELECT * FROM person");
$outp = "";

//RETRIEVE DATA
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"' . $rs["id"] . '",';
    $outp .= '"voornaam":"' . $rs["voornaam"] . '",';
    $outp .= '"achternaam":"' . $rs["achternaam"] . '",';
    $outp .= '"straat":"' . $rs["straat"] . '",';
    $outp .= '"huisnummer":"' . $rs["huisnummer"] . '",';
    $outp .= '"postcode":"' . $rs["postcode"] . '",';
    $outp .= '"woonplaats":"' . $rs["woonplaats"] . '",';
    $outp .= '"telefoonnummer":"' . $rs["telefoonnummer"] . '",';
    $outp .= '"tijd_toegevoegd":"'. $rs["tijd_toegevoegd"] . '"}';
}


//CONCAT OUTPUT IN AN ARRAY FROM
$outp ='['.$outp.']';

//CLOSE CONNECTION
$conn->close();

//RENDER JSON
echo($outp);