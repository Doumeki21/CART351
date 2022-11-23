<?php
require ('openDB.php');
// //for part 2 ;;; -> note this does not have to be done via ajax ...
// if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["onload"]))
// {
//   try
//   {
//     $myStr="SELECT username FROM users";
//     $result = $file_db->query($myStr);
//     if (!$result) die("Cannot execute query.");
//    // NOW WE WANT TO SEND THE RESULT AS A JSON STRING BACK TO CLIENT:
//    $res = array();
//    while($row = $result->fetch(PDO::FETCH_ASSOC))
//    {
//      // note the result from SQLitE is ALREADy ASSOCIATIVE
//      $res[] = $row;
//    }//end while
//    // endcode the resulting array as JSON
//    $myJSONObj = json_encode($res);
//    echo $myJSONObj;
//
//  }
//
//   catch(PDOException $e) {
//     // Print PDOException message
//     echo $e->getMessage();
//
//   }
//   exit;
// }
//check if there has been something posted to the server to be processed
if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["theOptions"]))
{
  try
  {

  //  var_dump($_GET["theOptions"]);
  // apply the quotes for safety ...
 $escaped = $file_db->quote($_GET["theOptions"]);
 $myStr="SELECT * FROM animalCollectionSub WHERE artist =".$escaped;
 $result = $file_db->query($myStr);
 if (!$result) die("Cannot execute query.");
// NOW WE WANT TO SEND THE RESULT AS A JSON STRING BACK TO CLIENT::

// get a row...
// MAKE AN ARRAY::
$res = array();
$i=0;
while($row = $result->fetch(PDO::FETCH_ASSOC))
{
  // note the result from SQLitE is ALREADy ASSOCIATIVE
  $res[$i] = $row;
  $i++;
}//end while
// endcode the resulting array as JSON
$myJSONObj = json_encode($res);
echo $myJSONObj;
}
catch(PDOException $e) {
  // Print PDOException message
  echo $e->getMessage();

}
exit;

}
?>

<!DOCTYPE html>
<html>
<head>
<title>Sample Retrieval USING JQUERY AND AJAX </title>
<!-- get JQUERY -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<!--set some style properties::: -->
<link rel="stylesheet" type="text/css" href="css/galleryStyleN.css">
</head>
<body>
<div class= "formContainer">
<!--form done using more current tags... -->
<form id="retrieveFromGallery" action="">
<!-- group the related elements in a form -->
<h3> RETRIEVE STUFF ACCORDING TO SOME CRITERIA :::</h3>
<fieldset>
<!-- <p><label>Criteria:</label><input type = "text" size="10" maxlength = "15"  name = "a_crit" value = "ALL" required></p> -->
<select id = "artist">
  <option value="Martha">Martha</option>
 <option value="Stephen">Stephen</option>
 <option value="Harold">Harold</option>
 <option value="Sarah">Sarah</option>
  <option value="Maria">Maria</option>
</select>
<input type = "submit" name = "submit" value = "get Results" id ="buttonS" />
 </fieldset>
</form>
</div>
<!-- NEW for the result -->
<div id = "back"></div>
<script>
$(document).ready (function(){

  //new  ...  on load get the users:::
//   //2::
//   $.get("AjaxRetrieval.php", {"onload":'users'}, function(response)
//   {
//     console.log(response);
//     let parsedJSON = JSON.parse(response);
//     console.log(parsedJSON);
//     //build rthe dropdown...
//     let select = $("#artist");
//     for(let i=0; i<parsedJSON.length;i++){
//       //create an option
//       let opt = $("<option>");
//       $(opt).attr("value",parsedJSON[i].username);
//       $(opt).text(parsedJSON[i].username);
//       $(select).append(opt);
//     }
//
//   });

    $("#retrieveFromGallery").submit(function(event) {
       //stop submit the form, we will post it manually. PREVENT THE DEFAULT behaviour ...
    event.preventDefault();
    //get the selected value
    let selValue = document.getElementById("artist").value;
    console.log(selValue);
    $.get("AjaxRetrieval.php", {"theOptions":selValue}, function(response)
    {
      console.log(response);
      let parsedJSON = JSON.parse(response);
      console.log(parsedJSON);
      displayResponse(parsedJSON);
    });

});

   /* validate and process form here*/
    function displayResponse(theResult){
      $("#back").empty();
         // theResult is AN ARRAY of objects ...
         for(let i=0; i< theResult.length; i++)
         {
         // get the next object
         let currentObject = theResult[i];
         let container = $('<div>').addClass("outer");
         let contentContainer = $('<div>').addClass("content");
         // go through each property in the current object ....
         for (let property in currentObject) {
           if(property ==="image"){
             let img = $("<img>");
             $(img).attr('src',currentObject[property]);

             $(img).appendTo(contentContainer);
           }
           else{
             let para = $('<p>');
             $(para).text(property+"::" +currentObject[property]);
               $(para).appendTo(contentContainer);
           }

         }
         $(contentContainer).appendTo(container);
         $(container).appendTo("#back");
       }
     }

});
</script>
</body>
</html>
