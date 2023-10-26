<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 3600");

$servername = "nuepp3ddzwtnggom.chr7pe7iynqr.eu-west-1.rds.amazonaws.com";
$username = "pagzvkjacwgbtvf8";
$password = "bfvlqujm2cq4dr0f";
$dbname = "hhhgnlz30ykkfm9z";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
$sql = "SELECT * FROM products"; 
$result = $conn->query($sql);

$data = $result->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);
exit()
?>
