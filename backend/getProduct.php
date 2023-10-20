<?php

$servername = "sql306.byethost18.com";
$username = "b18_35271351";
$password = "Mariamiiko12.";
$dbname = "b18_35271351_scandiweb";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

// Fetch data from the database
$sql = "SELECT * FROM products"; // Adjust the query according to your database structure
$result = $conn->query($sql);

// Return the data as JSON
$data = $result->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);
exit()
?>
