<?php
// require('openDB.php');


// //1. INSERT THE STATEMENT!
//     $insertStatement =  "INSERT INTO animalCollection (artist, title, creationDate, geoLoc, descript, image) VALUES ('Martha', 'Cardinals','1998-03-04','Montreal','Description for the arts','images/yellow-cardinal.jpg')";

//     //2. EXECUTE THE STATEMENT!
//     try
//     {
//       $file_db->exec($insertStatement);
//       echo ("INSERTION OF ENTRY into animalCollection Table successful");
//      // Close file db connection
//       $file_db = null;
//      }
//       //3. PRINT THE ERRORS/ SUCCESS!
//       catch(PDOException $e) {
//          // Print PDOException message
//           echo $e->getMessage();
//          }

require('openDB.php');
  $queryArray = array(
        "INSERT INTO animalCollection (artist, title, creationDate, geoLoc, descript, image) VALUES ('Sarah', 'cat','2002-06-12','Montreal','Description for the arts','images/cat_scratch.jpg')",
        "INSERT INTO animalCollection (artist, title, creationDate, geoLoc, descript, image) VALUES ('Harold', 'fox', '2012-10-21','New York','Description for the arts','images/red-fox.jpg')",
         "INSERT INTO animalCollection (artist, title, creationDate, geoLoc, descript, image) VALUES ('Stephen', 'bear','1999-07-18','Edinborough','Description for the arts','images/spectacled-bear.jpg')",
         "INSERT INTO animalCollection (artist, title, creationDate, geoLoc, descript, image) VALUES ('Martha', 'tiger','2017-08-21','Paris','Description for the arts','images/sperm_whale.jpg')",
        "INSERT INTO animalCollection (artist, title, creationDate, geoLoc, descript, image) VALUES ('Sarah', 'tweet','2005-06-13','Toronto','Description for the arts','images/tweet.jpg')",
        "INSERT INTO animalCollection (artist, title, creationDate, geoLoc, descript, image) VALUES ('Sarah', 'whale', '2003-03-19','Halifax','Description for the arts','images/sperm_whale.jpg')",
         "INSERT INTO animalCollection (artist, title, creationDate, geoLoc, descript, image) VALUES ('Stephen', 'devil','2000-05-06','London','Description for the arts','images/tasmanian-devil.jpg')"
    );
 
     try {
       // go through each entry in the array and execute the INSERT query statement....
     for($i =0; $i< count($queryArray); $i++)
     {
        $file_db->exec($queryArray[$i]);
 
     }
     // if we reach this point then all the data has been inserted successfully.
    echo ("INSERTION OF ENTRY into animalCollection Table successful <br>");
     }
 
     catch(PDOException $e) {
        // Print PDOException message
         echo $e->getMessage();
       }
?>