<?php

$conn = new PDO("mysql:host=localhost;dbname=utilisateurs;port=3307;charset=UTF8", "root", "");
$sql = "SELECT * FROM utilisateurs";
$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->fetchAll();

echo json_encode($result);