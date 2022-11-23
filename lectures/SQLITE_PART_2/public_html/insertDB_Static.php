<?php
// Set default timezone
//  date_default_timezone_set('UTC');
//https://www.sqlitetutorial.net/sqlite-foreign-key/
//https://www.techonthenet.com/sqlite/foreign_keys/foreign_keys.php
//** Important:
// we cannot insert into a table if the associated foreign key does NOT exist! */
require('openDB.php');
try {
    /**************************************
    * Create databases and                *
    * open connections                    *
    **************************************/
// ENABLE THE CONSTRAINT...
//The command returns an integer value: 1: enable, 0: disabled. If the command returns nothing, it means that your SQLite version doesn’t support foreign key constraints.

//If the SQLite library is compiled with foreign key constraint support,
//the application can use the PRAGMA foreign_keys command to enable or disable foreign key constraints at runtime.

//PRAGMA:: the code that consists of useful information on how a compiler or interpreter or assembler should process the program - only affects the associated compilers behaviour

    $file_db->exec("PRAGMA foreign_keys = on");


/*locations TEXT, long TEXT, lat TEXT, descript TEXT*/
//1:
//   $queryInsertLocs = array(
//      "INSERT INTO locations(location,lat,long, descript) VALUES('Montreal','45.5017','73.5673','Montreal Coords')",
//      "INSERT INTO locations(location,lat,long, descript) VALUES('New York','40.7128','74.0060','NY coords')",
//      "INSERT INTO locations(location,lat,long, descript) VALUES('Edinborough','55.9533','3.1883','Edinborough coords')",
//      "INSERT INTO locations(location,lat,long, descript) VALUES('Paris','48.8566','2.3522','Paris coords')",
//      "INSERT INTO locations(location,lat,long, descript) VALUES('Toronto','43.6532','79.3832','Toronto coords')",
//      "INSERT INTO locations(location,lat,long, descript) VALUES('Halifax','44.6488','63.5752','Halifax coords')",
//     "INSERT INTO locations(location,lat,long, descript) VALUES('London','51.5074','0.1278','London coords')"


//    );
//    for($i =0; $i< count($queryInsertLocs); $i++){
//      $file_db->exec($queryInsertLocs[$i]);
//   }

//   // users
//   $queryArrayA = array();
//   $aHash = password_hash('123ed', PASSWORD_BCRYPT);
//   $password_esA = $file_db->quote($aHash);

//   $bHash = password_hash('mycat', PASSWORD_BCRYPT);
//   $password_esB = $file_db->quote($bHash);

//   $cHash = password_hash('rainbow', PASSWORD_BCRYPT);
//   $password_esC = $file_db->quote($cHash);

//   $dHash = password_hash('abba', PASSWORD_BCRYPT);
//   $password_esD = $file_db->quote($dHash);

//     $queryArrayA[]= "INSERT INTO users(userID,username,pass) VALUES(1,'Sarah',$password_esA )";
//     $queryArrayA[] = "INSERT INTO users(userID,username,pass) VALUES(2,'Harold',$password_esB)";
//     $queryArrayA[] = "INSERT INTO users(userID,username,pass) VALUES(3,'Stephen',$password_esC )";
//     $queryArrayA[]=  "INSERT INTO users(userID,username,pass) VALUES(4,'Martha',$password_esD)";

//   // art coll sub
//     $queryArray = array(
//   "INSERT INTO animalCollectionSub (artist, title, creationDate, geoLoc, descript, image, uID) VALUES ('Sarah', 'cat','2002-06-12','Montreal','Description for the arts','images/cat_scratch.jpg',1)",
//         "INSERT INTO animalCollectionSub (artist, title, creationDate, geoLoc, descript, image, uID) VALUES ('Harold', 'fox', '2012-10-21','New York','Description for the arts','images/red-fox.jpg',2)",
//          "INSERT INTO animalCollectionSub (artist, title, creationDate, geoLoc, descript, image,uID) VALUES ('Stephen', 'bear','1999-07-18','Edinborough','Description for the arts','images/spectacled-bear.jpg',3)",
//          "INSERT INTO animalCollectionSub (artist, title, creationDate, geoLoc, descript, image,uID) VALUES ('Martha', 'tiger','2017-08-21','Paris','Description for the arts','images/sperm_whale.jpg',4)",
//         "INSERT INTO animalCollectionSub (artist, title, creationDate, geoLoc, descript, image,uID) VALUES ('Sarah', 'tweet','2005-06-13','Toronto','Description for the arts','images/tweet.jpg',1)",
//         "INSERT INTO animalCollectionSub (artist, title, creationDate, geoLoc, descript, image,uID) VALUES ('Sarah', 'whale', '2003-03-19','Halifax','Description for the arts','images/sperm_whale.jpg',1)",
//          "INSERT INTO animalCollectionSub (artist, title, creationDate, geoLoc, descript, image,uID) VALUES ('Stephen', 'devil','2000-05-06','London','Description for the arts','images/tasmanian-devil.jpg',3)"
// );

//      for($i =0; $i< count($queryArrayA); $i++)
//      {
//         $file_db->exec($queryArrayA[$i]);

//      }
//       // go through each entry in the array and execute the INSERT query statement....
//       for($i =0; $i< count($queryArray); $i++)
//       {
//   	     $file_db->exec($queryArray[$i]);

//       }
//       echo("INITAL SUCCESS INSERTIONS... STATIC///");


/* 3:: TO FIX THE VIOLATION */
//  $nHash = password_hash('bestfriendname', PASSWORD_BCRYPT);
//   $password_esN = $file_db->quote($nHash);
//   $qT = "INSERT INTO users(userID,username,pass) VALUES(5,'Maria',$password_esN)";
//     $file_db->exec($qT);


// 2:: WILL INCUR A VIOLATION ...
   
    // $qA = "INSERT INTO animalCollectionSub (artist, title, creationDate, geoLoc, descript, image,uID) VALUES ('Maria', 'cat New','2003-06-12','London','Untitled II','images/cat_stretch.jpg',5)";
    // $file_db->exec($qA);

//4: this will NOT incur a violation -eventhough the location is not in the location table  ...
 $qb = "INSERT INTO animalCollectionSub (artist, title, creationDate, geoLoc, descript, image,uID) VALUES ('Maria', 'cat New','2003-06-12','Hamburg','Untitled II','images/cat_stretch.jpg',5)";
    $file_db->exec($qb);


//   // if we reach this point then all the data has been inserted successfully.
//   echo ("INSERTION OF ENTRY into animalCollection Table successful");
//    //  Close file db connection
      $file_db = null;


  }//try
  catch(PDOException $e) {
    // Print PDOException message
    echo $e->getMessage();
  }
  ?>
