<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 3600");

$data = file_get_contents('php://input');
$skuData = json_decode($data, true);

if ($skuData !== null) {

    $servername = "nuepp3ddzwtnggom.chr7pe7iynqr.eu-west-1.rds.amazonaws.com";
    $username = "pagzvkjacwgbtvf8";
    $password = "bfvlqujm2cq4dr0f";
    $dbname = "hhhgnlz30ykkfm9z";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sku = $skuData['sku'];
        $name = $skuData['name'];
        $price = $skuData['price'];
        $size = $skuData['size'];
        $height = $skuData['height'];
        $width = $skuData['width'];
        $length = $skuData['length'];
        $weight = $skuData['weight'];

        $stmt = $conn->prepare("INSERT INTO products (sku, name, price, size, height, width, length, weight) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$sku, $name, $price, $size, $height, $width, $length, $weight]);

        echo "Data inserted successfully!";
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    echo 'Invalid data received from the client.';
}
exit()
?>
