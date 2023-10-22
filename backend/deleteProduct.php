<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 3600");

$servername = "sql11.freemysqlhosting.net";
$username = "sql11654711";
$password = "RA23f72DPL";
$dbname = "sql11654711";

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
