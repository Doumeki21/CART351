<!DOCTYPE html>
<head>
<title> Output from the Animal Gallery Database </title>
<link rel='stylesheet' type='text/css' href='css/galleryStyle.css'>
</head>
<body>
<?php
// get the contents from the db and output. ..
try {
    require('openDB.php');
    $sql_select='SELECT * FROM animalCollection';
    $s1 =  "SELECT * FROM animalCollection WHERE (creationDate >=Date('2003-01-01') AND artist = 'Sarah')OR(creationDate <=Date('2000-01-01') AND artist = 'Stephen')";
    $sql_selectA = "SELECT DISTINCT artist FROM animalCollection";
    $s2 = "SELECT creationDate, artist FROM animalCollection WHERE artist = 'Harold' OR artist = 'Sarah' ORDER BY creationDate";
    $s3 =  "SELECT artist, geoLoc, COUNT(*) FROM animalCollection GROUP BY artist,geoLoc";
    // the result set (query, not changing, just ask for smthg)
    $result = $file_db->query($sql_select);
    if (!$result) die("Cannot execute query.");

//     // fetch first row ONLY...
//   $row = $result->fetch(PDO::FETCH_ASSOC);
//   var_dump($row);
 
}
catch(PDOException $e) {
    // Print PDOException message
    echo $e->getMessage();
  }


  echo "<h3> Query Results:::</h3>";
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
      if($key!="image")
      {
        // echo the key and entry
          echo "<p>".$key." :: ".$entry."</p>";
      }
   }
 
  // put image in last
    echo "</div>";
    // access by key
    // $imagePath = $row["image"];
    // echo "<img src = $imagePath \>";
    echo "</div>";
}//end while
echo"</div>";
 
?>
</body>
</html>