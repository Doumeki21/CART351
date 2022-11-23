<?php

// clear any sessions ...
session_start();
// remove all session variables
session_unset();
// destroy the session
session_destroy();
 ?>

 <!DOCTYPE html>
 <html>
 <head>
 <title>Sample LOGIN page </title>
 <!-- get JQUERY -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
 <!--set some style properties::: -->
 <link rel="stylesheet" type="text/css" href="css/galleryStyleN.css">
<script>
function goToLogin(){
  window.location = 'AjaxLogin.php';

}

function goToRegister(){
    window.location = 'AjaxRegisterUser.php';
}


</script>
 </head>
 <body>
<h3> WELCOME TO THE ...GALLERY </h3>
 <div class= "wrapper-buttons">
   <div onclick = "goToLogin()"> LOGIN </div>
    <div onclick = "goToRegister()"> REGISTER </div>
 </div>
</body>
</html>
