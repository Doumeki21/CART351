<?php
require ('openDB.php');
try{
  echo("test");
 //$myStr="SELECT * FROM users";
 $myStrTwo="SELECT * FROM users";
 $result = $file_db->query($myStrTwo);
 if (!$result) die("Cannot execute query.");
// NOW WE WANT TO SEND THE RESULT AS A JSON STRING BACK TO CLIENT::

while($row = $result->fetch(PDO::FETCH_ASSOC))
{
  var_dump($row);
}//end while


}

catch(PDOException $e) {
  // Print PDOException message
  echo $e->getMessage();

}


?>
