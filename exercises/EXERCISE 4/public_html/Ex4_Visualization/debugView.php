<?php
require('dbScripts/openDB.php');
try {

$myStr="SELECT * FROM dataStuff";
$myStrTwo="SELECT day,weather, COUNT(*) FROM dataStuff GROUP BY day";

$testThree = "SELECT * FROM dataStuff WHERE after_mood IN ('happy','neutral','calm','serene','well')";
$testFour = "SELECT * FROM dataStuff ORDER BY ";
$testFive = "SELECT * FROM dataStuff WHERE day IN ('Monday','Tuesday') ORDER BY event_affect_strength";
$testSix = "SELECT * FROM dataStuff WHERE start_mood AND after_mood IN ('sad','angry','neutral','calm', 'anxious','moody','hurt')";
$result = $file_db->query($testSix);


if (!$result) die("Cannot execute query.");
while($row = $result->fetch(PDO::FETCH_ASSOC))
{
  var_dump($row);

foreach ($row as $key=>$entry)
{

 echo "<p>".$key." :: ".$entry."</p>";
}

}//end while


}

catch(PDOException $e) {
  // Print PDOException message
  echo $e->getMessage();

}
exit;
  ?>
