<?php
session_start();

 ?>
<!DOCTYPE html>
<html>
<head>
<title>WITHIN A SESSION </title>
<!-- get JQUERY -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<!--set some style properties::: -->
<link rel="stylesheet" type="text/css" href="css/galleryStyleN.css">
</head>
<body>

<?php
$u_id = $_SESSION['userID'];

//ensure that user exists...
if($u_id ==null){
  echo ("no user");
}

else{
  echo("<p style = 'background:#004d80; width:30%; color:white;'>LOGGED IN USER ID :: ".$u_id."</p>");
  echo("<p style = 'background:#004d80; width:30%; color:white;'>LOGGED IN USER NAME:: ".$_SESSION['username']."</p>");
  // now lets get all entries in the db that have the user ID...
require("openDB.php");
// now lets get all entries in the db that have the user ID...
try {
//what happens if a location of an entry not in the loc table? Nothing::: why? because there is no constrtaint ..
//but will NOT be included in the JOIN
/*https://www.sqlitetutorial.net/sqlite-join/ */

//need the ON (condition of the join):: to have what are you joining ON otherwise will do every combination ...
  // make a join with locations
  $joinA = "SELECT * FROM animalCollectionSub INNER JOIN locations ON animalCollectionSub.geoLoc =locations.location";
  $joinB = "SELECT * FROM animalCollectionSub INNER JOIN locations ON animalCollectionSub.geoLoc =locations.location WHERE uID = '$u_id'";
  $defQ = "SELECT * FROM animalCollectionSub";
  $joinC = "SELECT * FROM animalCollectionSub INNER JOIN users ON animalCollectionSub.uID =users.userID";
  $joinD = "SELECT * FROM animalCollectionSub INNER JOIN users ON animalCollectionSub.uID =users.userID WHERE uID = '$u_id'";


//everything
  $testThree = "SELECT * FROM animalCollectionSub
  INNER JOIN users ON animalCollectionSub.uID =users.userID
  INNER JOIN locations ON animalCollectionSub.geoLoc =locations.location";

//everything for a logged in user
  $testFour = "SELECT * FROM animalCollectionSub
  INNER JOIN users ON animalCollectionSub.uID =users.userID";
  //INNER JOIN locations ON animalCollectionSub.geoLoc =locations.location  WHERE uID = '$u_id'";



  $result = $file_db->query($joinD);
  if (!$result) die("Cannot execute query.");
  echo "<h3> QUERY RESULTS:::</h3>";
  echo"<div id='back'>";
  // get a row...
  while($row = $result->fetch(PDO::FETCH_ASSOC))
  {
     echo "<div class ='outer'>";
     echo "<div class ='content'>";

    // go through each column in this row
    // retrieve key entry pairs
    foreach ($row as $key=>$entry)
    {
      //if the column name is not 'image'
       if($key!="image" && $key!="pass")
       {
         // echo the key and entry
           echo "<p class = 'key'>".$key." ::".$entry."</p>";
       }
    }

    // put image in last
      echo "</div>";
      // access by key
      $imagePath = $row["image"];
      echo "<img src = $imagePath \>";
      echo "</div>";

  }
    echo "</div>";
}


  catch(PDOException $e) {
    // Print PDOException message
    echo $e->getMessage();
  }
} //is there a user?
?>


</body>

</html>
