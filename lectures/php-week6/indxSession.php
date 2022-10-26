<?php
// 1:: Start the session
session_start();
?>

<?php
//check if there has been something posted to the server to be processed
if($_SERVER['REQUEST_METHOD'] == 'GET')
{
    $theMessage ="";
// need to process
// echo("inside get request<br>");
$request = $_SERVER['REQUEST_URI']; // THE WHOLE URL (with queries)
// echo("the request: ".$request);
 


if(isset($_GET['fav_color'])){
    // echo("<br>form is being processed ");
//don't use the raw data to store! (make your own variables)
    $fcolor = $_GET['fav_color'];
    $fanimal = $_GET['fav_animal'];
    $fnum = $_GET['fav_num'];

  // output something with these values::
 
    //2:: add to session vars...
    $_SESSION["fav_color"] = $fcolor;
    $_SESSION["favAnimal"] = $fanimal;
 
  if(intval($fnum>60)){
    $theMessage = "You chose a number greater than 60";
  }
  else
  {
      $theMessage = "You chose a number less than 60";
  }
  
  $_SESSION['message'] = $theMessage;
  header("Location:indxSession.php");
}
}

?>

<!DOCTYPE html>
<html>
<head>
<title>INPUT to GET in php</title>
</head>
<style>
p{
  padding:2px;
  width:100%;
}
p label{
  display:inline-block;
  width:10%;
  color:rgba(149, 0, 153,0.85);
 
}
.wrapper{
  width:75%;
  margin-left:12%;
}
h2{
  color:rgba(149, 0, 153,0.85);
 
}
input{
  width:50%;
}
input[type=submit]{
  width:8%;
}
form{
  padding:10px;
  background:rgba(149, 0, 153,0.25);
}
</style>
<body>
 
<div class = "wrapper">
  <h2> CART 351: PROCESS FORM WITH GET </h2>
<form method="get" action="indxSession.php">
  <p><label>Fav Animal:</label><input type = "text" size="24" maxlength = "40"  name = "fav_animal" required></p>
  <p><label>Fav Color:</label><input type = "text" size="24" maxlength = "40"  name = "fav_color" required></p>
  <p><label>Fav Number:</label><input type = "number" size="24" maxlength = "40"  name = "fav_num" min="1" max="100" required></p>
  <p><input type = "submit" name = "submit" value = "send" id =buttonS /></p>
</form>

<div style = "background:rgba(149, 0, 153,0.75);color:white";>
<?php 
echo($_SESSION['message']);
?> </div>
</div>
</body>
</html>