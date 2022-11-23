<?php
// Set default timezone
require('openDB.php');
try {
    /**************************************
    * Create tables              *
    /**************************************/
    $file_db->exec("PRAGMA foreign_keys = on");

   $theQuery = 'CREATE TABLE IF NOT EXISTS users (userID INTEGER PRIMARY KEY NOT NULL, username TEXT, pass TEXT)';
   $file_db ->exec($theQuery);


//FOREIGN KEY (uID) REFERENCES users(userID)
// specify that it is a foreign key AND specify where it comes from (LINK)
   $theQueryT = 'CREATE TABLE IF NOT EXISTS animalCollectionSub (animalCollectionId INTEGER PRIMARY KEY NOT NULL, artist TEXT, title TEXT, geoLoc TEXT, creationDate TEXT,descript TEXT,image TEXT, uID INTEGER, FOREIGN KEY (uID) REFERENCES users(userID))';
    $file_db ->exec($theQueryT);

    $theQueryLocs = 'CREATE TABLE IF NOT EXISTS locations(locId INTEGER PRIMARY KEY NOT NULL, location TEXT, long TEXT, lat TEXT, descript TEXT )';
    $file_db ->exec($theQueryLocs);
   echo("created tables successfully<br>");
      // Close file db connection
       $file_db = null;


  }
  catch(PDOException $e) {
    // Print PDOException message
    echo $e->getMessage();
  }
  ?>
