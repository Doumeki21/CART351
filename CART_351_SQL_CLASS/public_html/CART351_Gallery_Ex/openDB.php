<?php
try {
    /******************************************
    * Create databases and  open connections*
    ******************************************/
 
    // Create (connect to) SQLite database in file
    $file_db = new PDO('sqlite:../../db/animalGallery.db');
  // Set errormode to exceptions
    $file_db->setAttribute(PDO::ATTR_ERRMODE,
                            PDO::ERRMODE_EXCEPTION);
    // echo("opened or connected to the database animalGallery <br>");
   }
   //to catch the error
catch(PDOException $e) {
    // Print PDOException message
    echo $e->getMessage();
  }
  ?>