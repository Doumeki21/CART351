<?php
// clear any sessions ...
// KEEP A SESSION OPEN TO TRACK THE 
session_start();
// remove all session TO TRACK THE USER'S ACTIVITY. 
session_unset();
// destroy the session
session_destroy();

require ('openDB.php');
//check if there has been something posted to the server to be processed

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
// need to process
 $user = $_POST['a_user'];
 $pass_inputted= $_POST['a_pass'];

 //var_dump($_POST);


   try {
    /*The data from the text box is potentially unsafe; 'tainted'. Use the quote() - puts quotes around things..
      It escapes a string for use as a query parameter.
      This is common practice to avoid malicious sql injection attacks.
      PDO::quote() places quotes around the input string (if required)
      and escapes special characters within the input string, using a quoting style appropriate to the underlying driver. */
      $user_es =$file_db->quote($user);
      $password_es = $file_db->quote($pass_inputted);

      // first check if exists ::
        $sql_select= "SELECT COUNT(*) from users WHERE username=$user_es" ;
        $result = $file_db->query($sql_select);

       if (!$result) die("Cannot execute query.");


       if ($result->fetchColumn() > 0) {
         //NO ECHOS!

// NAKE THE HIIDDEN TEXTS.
         $sql_getTest= "SELECT userID, username, pass from users WHERE username=$user_es" ;
         $result = $file_db->query($sql_getTest);
         $row = $result->fetch(PDO::FETCH_ASSOC);

         //1:: check password: using the INBUILT verify function
         //https://www.php.net/manual/en/function.password-verify.php
         if (password_verify($pass_inputted, $row["pass"])) {
           // Success!
           session_start();
           $_SESSION['userID'] = $row["userID"];
           $_SESSION['username'] = $row['username'];
           echo("IN");
           return;
           // start a session a
           }
           else
            {
             // Invalid credentials
             echo("PASSWORD MISMATCH");
           }


       }
      //  WHEN USER DOESN'T EXIST
       else{
        $file_db =null;
         echo("USER MISMATCH");
       }

     }
     catch(PDOException $e) {
       // Print PDOException message
       echo $e->getMessage();
     }

    //echo("done");
    exit;
}//POST
?>

<!DOCTYPE html>
<html>
<head>
<title>Sample LOGIN page </title>
<!-- get JQUERY -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<!--set some style properties::: -->
<link rel="stylesheet" type="text/css" href="css/galleryStyleN.css">
</head>
<body>

<div class= "formContainer">
<!--form done using more current tags... -->
<form id="insertUser" action="" enctype ="">
<!-- group the related elements in a form -->
<h3> LOGIN :::</h3>
<fieldset>
<p><label>User:</label><input type="text" size="24" maxlength = "40" name = "a_user" required></p>
<p><label>Pass:</label><input type = "password" size="24" maxlength = "40"  name = "a_pass" required></p>
<p class = "sub"><input type = "submit" name = "submit" value = "submit my info" id ="buttonS" /></p>
 </fieldset>
</form>
<div id ="error"></div>
</div>

<script>
// here we put our JQUERY
$(document).ready (function(){
    $("#insertUser").submit(function(event) {
       //stop submit the form, we will post it manually. PREVENT THE DEFAULT behaviour ...
      event.preventDefault();
     console.log("button clicked");
     let form = $('#insertUser')[0];
     let data = new FormData(form);

  $.ajax({
            type: "POST",
            enctype: 'application/x-www-form-urlencoded',
            url: "AjaxLogin.php",
            data: data,
            processData: false,//prevents from converting into a query string
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (response) {
            //reponse is a STRING (not a JavaScript object -> so we need to convert)
            console.log("we had success!");
            console.log(response);

            if(response ==="USER MISMATCH"){
            $("#error").html("<p>No such user try again or register <a href  = 'AjaxRegisterUser.php'>here </a></p> ");
            $("#insertUser")[0].reset();
          }

            else if(response ==="PASSWORD MISMATCH"){
              $("#error").html("<p>incorrect password .. try again </p> ");
              $("#insertUser")[0].reset();
            }

            else{
            window.location = "Commence.php";
            }
           },
           error:function(){
          $("#insertUser")[0].reset();
          console.log("error occurred");
        }
      });
   });

});
</script>
</body>
</html>
