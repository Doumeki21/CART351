<?php

$name = $_POST["name"];
$age = $_POST["age"];
$ac = $_POST["ac"];
$heat = $_POST["heat"];
$laundrycount = $_POST["laundrycount"];
$laundrytemp = $_POST["laundrytemp"];
$dishescount = $_POST["dishescount"];
$lights = $_POST["lights"];
$electronics = $_POST["electronics"];
$commutecount = $_POST["commutecount"];
$commutemode = $_POST["commutemode"];

$host = "localhost";
$dbname = "powerplay";
$username = "root";
$password = "password";

$conn = mysqli_connect($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Failed to connect to MySQL: " . mysqli_connect_error());
}

$sql = "INSERT INTO powerplay (name, age, ac, heat, laundrycount, laundrytemp, dishescount, lights) VALUES ('$name', '$age', '$ac', '$heat', '$laundrycount', '$laundrytemp', '$dishescount', '$lights', '$electronics', '$commutecount', '$commutemode')";

$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "ssii", $name, $age, $ac, $heat, $laundrycount, $laundrytemp, $dishescount, $lights);

mysqli_stmt_execute($stmt);

echo "PowerPlay entry added successfully.";