<?php
//check if there has been something posted to the server to be processed
if($_SERVER['REQUEST_METHOD'] == 'GET')
{
  if(isset($_GET['fav_color'])){
    $theMessage ="";
 
    $fcolor = $_GET['fav_color'];
    $fanimal = $_GET['fav_animal'];
    $fnum = $_GET['fav_num'];
    // output something with these values::
 
    if(intval($fnum>60)){
      $theMessage = "You chose a number greater than 60";
    }
    else
    {
        $theMessage = "You chose a number less than 60";
    }
 
   $myPackagedData=new stdClass();
   $myPackagedData->message = $theMessage ;
   echo json_encode($myPackagedData);
   //echo("we have data to process");
  exit;
 }
}
?>