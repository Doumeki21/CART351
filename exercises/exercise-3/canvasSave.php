<?php

$upload_dir = "upload/";
$img = $_POST['imageTest'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$file = $upload_dir ."test" . ".png";
//save to file...
$success = file_put_contents($file, $data);
echo("saved the file");



?>
