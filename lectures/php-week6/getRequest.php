<html>
<head>
<title>INPUT to GET in php</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
 
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
<form id = "testGetAjax">
  <p><label>Fav Animal:</label><input type = "text" size="24" maxlength = "40"  name = "fav_animal" required></p>
  <p><label>Fav Color:</label><input type = "text" size="24" maxlength = "40"  name = "fav_color" required></p>
  <p><label>Fav Number:</label><input type = "number" size="24" maxlength = "40"  name = "fav_num" min="1" max="100" required></p>
  <p><input type = "submit" name = "submit" value = "send" id =buttonS /></p>
</form>
<div id = "resultDiv" style = "background:rgba(149, 0, 153,0.75);color:white"></div>
</div>
<script>
 $(document).ready (function(){
    $("#testGetAjax").submit(function(event) {
        //stop submit the form, we will post it manually.
       //PREVENT THE DEFAULT behaviour ...
      event.preventDefault();
     console.log("button clicked");
     /* turn the form data into an array - as a set of url encoded key/value pairs */
    /* The jQuery serializedArray() Method is used to create a JavaScript array of objects by serializing form values*/
     let data =$('#testGetAjax').serializeArray();
     // Display the key/value pair OBJECTS using a foreach ...
     for(let pair of data.entries()) {
       console.log(pair); 
     }
    //request

    $.ajax({
       url: "inputToGet.php",
       data: data,
       dataType: "text", /*response will be text */
       cache: false,
       timeout: 600000,

      success: function (response) {
       //reponse is a STRING (not a JavaScript object -> so we need to convert)
       console.log("we had success!");
       console.log(response);
       let parsedJSON = JSON.parse(response);
       console.log(parsedJSON);
       displayMessage(parsedJSON);
       //reset the form
       $('#testGetAjax')[0].reset();
      },
      error:function(){
     console.log("error occurred");
   }
 });
 
 
   }) //submit

   function displayMessage(messageObj){
  $("#resultDiv").text(messageObj.message);
}
 });
</script>
</body>
</html>