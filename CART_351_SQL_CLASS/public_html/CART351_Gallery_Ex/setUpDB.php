<?php
 require('openDB.php');


 try
{
  $theQuery = "CREATE TABLE animalCollection (pieceID INTEGER PRIMARY KEY NOT NULL, artist TEXT, title TEXT,geoLoc TEXT, creationDate TEXT,descript ,image TEXT)";
  $file_db ->exec($theQuery);
  echo ("Table animalCollection created successfully<br>");
  $file_db = null;
}
 
catch(PDOException $e) 
{
    // Print PDOException message
    echo $e->getMessage();
}
?>