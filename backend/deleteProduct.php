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

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $data = json_decode(file_get_contents("php://input"), true);
    $itemIdsToDelete = $data["itemIds"];

    foreach ($itemIdsToDelete as $itemId) {
        $sql = "DELETE FROM products WHERE id = $itemId"; 
        if ($conn->query($sql) === TRUE) {
        } else {
            echo "Error deleting item with ID: $itemId";
        }
    }
    $conn->close();
} else {
    echo "Invalid request method.";
}
exit()
?>
