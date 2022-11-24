<!-- Sabine's code sample -->
<?php

$imgArr = scandir("upload");
$countFiles = count($imgArr);
// request the whole directory folder-
$upload_dir = "upload/"; 
$img = $_POST['imageTest'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$file = $upload_dir ."test_" .$countFiles. ".png";
//save to file...
$success = file_put_contents($file, $data);
echo("saved the file");



?>
