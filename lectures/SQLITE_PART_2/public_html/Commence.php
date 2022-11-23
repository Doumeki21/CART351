<?php
session_start();
require ('openDB.php');
 ?>
<!DOCTYPE html>
<html>
<head>
<title>COMMENCE</title>
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
try {
  // VARIABLES INSIDE DOUBLE QUOTES WILL ALL BE TREATED AS VARIABLES. 
      $sql_select="SELECT * FROM animalCollectionSub WHERE uID = '$u_id'";
      // the result set
      $result = $file_db->query($sql_select);
      if (!$result) die("Cannot execute query.");
      echo "<h3> Query Results FOR LOGGED IN USER:::</h3>";
      echo "<h3> QUERY RESULTS:::</h3>";
      echo"<div id='back'>";
      while($row = $result->fetch(PDO::FETCH_ASSOC))
      {
      //  var_dump($row);
      echo "<div class ='outer'>";
      echo "<div class ='content'>";
        // go through each column in this row
        // retrieve key entry pairs
        foreach ($row as $key=>$entry)
        {
          //if the column name is not 'image'
           if($key!="image")
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
}

?>


</body>

</html>
