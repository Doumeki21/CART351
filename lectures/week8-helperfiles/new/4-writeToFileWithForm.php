<?php
if($_SERVER['REQUEST_METHOD'] == 'GET')
{
  if(isset($_GET['fav_animal'])){


   $animal = $_GET['fav_animal'];
   $color = $_GET ['fav_color'];
   $fav_num = $_GET['fav_num'];
   //If you use fopen() on a file that does not exist, it will create it,
   //given that the file is opened for writing (w) or appending (a).
   $theFile = fopen("files/testInput.txt", "a") or die("Unable to open file!");

  fwrite($theFile, "ANIMAL:".$animal."\n");
  fwrite($theFile, "COLOR:".$color."\n");
  //fwrite($theFile, $color); // no newline...
  fwrite($theFile,  "FAVNUM:".$fav_num."\n");

  fclose($theFile);
  echo("WE HAVE SUCCESSFULLY read the vars AND saved to the file ... ");
   // you must exit
exit;
}

}
?>

<!DOCTYPE html>
<html>
<head>
<title>Same Form Ex </title>
<!-- get JQUERY -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

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

</head>
<body>
<div class = "wrapper">
  <h2> CART 351: PROCESS FORM WITH GET AND SAVE TO FILE </h2>
<form id = "insertTest">
  <p><label>Fav Animal:</label><input type = "text" size="24" maxlength = "40"  name = "fav_animal" required></p>
  <p><label>Fav Color:</label><input type = "text" size="24" maxlength = "40"  name = "fav_color" required></p>
  <p><label>Fav Number:</label><input type = "number" size="24" maxlength = "40"  name = "fav_num" min="1" max="100" required></p>
  <p><input type = "submit" name = "submit" value = "send" id =buttonS /></p>
</form>
<div style = "background:rgba(149, 0, 153,0.75);color:white";><?php echo($theMessage)?> </div>
</div>
<script>
// here we put our JQUERY
$(document).ready (function(){
    $("#insertTest").submit(function(event) {
       //stop submit the form, we will post it manually. PREVENT THE DEFAULT behaviour ...
      event.preventDefault();
     console.log("button clicked");
     let data =$('#insertTest').serializeArray();
     /*for console log */
     for (let valuePairs of data.entries()) {
       console.log(valuePairs[0]+ ', ' + valuePairs[1]);
     }

     // P3
         $.ajax({
           type: "GET",
            url: "4-writeToFileWithForm.php",
            data: data,
            dataType: "text", /*response will be text */
            cache: false,
            timeout: 600000,
            success: function (response) {
              //reponse is a STRING (not a JavaScript object -> so we need to convert)
                 console.log("we had success!");
                 console.log(response);
                 //reset the form
                 $('#insertTest')[0].reset();
           },
           error:function(){
          console.log("error occurred");
        }
      });
  });


   });

</script>
</body>
</html>
