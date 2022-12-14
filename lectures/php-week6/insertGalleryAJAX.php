<?php
//check if there has been something posted to the server to be processed
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
// need to process
 $artist = $_POST['a_name'];
 $title = $_POST['a_title'];
 $loc = $_POST['a_geo_loc'];
 $description = $_POST['a_descript'];
 $creationDate = $_POST['a_date'];
 if($_FILES)
  {
    //echo "file name: ".$_FILES['filename']['name'] . "<br />";
    //echo "path to file uploaded: ".$_FILES['filename']['tmp_name']. "<br />";
   $fname = $_FILES['filename']['name'];
   move_uploaded_file($_FILES['filename']['tmp_name'], "images/".$fname);
    // echo "this is super";

    //package the data and echo back...
    /* make  a new generic php object (note:: php also supports objects - 
   but we are NOT doing that in this class - you can if you want ;)  )*/
   $myPackagedData=new stdClass();
   $myPackagedData->artist = $artist ;
   $myPackagedData->title = $title ;
   $myPackagedData->location = $loc ;
   $myPackagedData->description = $description ;
   $myPackagedData->creation_Date = $creationDate ;
   $myPackagedData->fileName = $fname ;
    /* Now we want to JSON encode these values as a JSON string ..
    to send them to $.ajax success  call back function... */
   $myJSONObj = json_encode($myPackagedData);
   echo $myJSONObj;

    exit;
  }//FILES
}//POST
?>

<html>
<head>
<title>Sample Insert into Gallery Form USING JQUERY AND AJAX </title>
<!-- get JQUERY -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<!--set some style properties::: -->
<link rel="stylesheet" type="text/css" href="css/galleryStyle.css">
</head>
<body>
  <!-- NEW for the result -->
<div id = "result"></div>
 
<div class= "formContainer">
<!--form done using more current tags... -->
<form id="insertGallery" action="" enctype ="multipart/form-data">
<!-- group the related elements in a form -->
<h3> SUBMIT AN ART WORK :::</h3>
<fieldset>
<p><label>Artist:</label><input type="text" size="24" maxlength = "40" name = "a_name" required></p>
<p><label>Title:</label><input type = "text" size="24" maxlength = "40"  name = "a_title" required></p>
<p><label>Geographic Location:</label><input type = "text" size="24" maxlength = "40" name = "a_geo_loc" required></p>
<p><label>Creation Date (DD-MM-YYYY):</label><input type="date" name="a_date" required></p>
<p><label>Description:</label><textarea type = "text" rows="4" cols="50" name = "a_descript" required></textarea></p>
<p><label>Upload Image:</label> <input type ="file" name = 'filename' size=10 required/></p>
<p class = "sub"><input type = "submit" name = "submit" value = "submit my info" id ="buttonS" /></p>
 </fieldset>
</form>
</div>
<script>
    $(document).ready (function(){
    $("#insertGallery").submit(function(event) {
       //stop submit the form, we will post it manually. PREVENT THE DEFAULT behaviour ...
      event.preventDefault();
     console.log("button clicked");

     let form = $('#insertGallery')[0];
let data = new FormData(form);
/*console.log to inspect the data */
    //  for (let pair of data.entries()) {
    //    console.log(pair[0]+ ', ' + pair[1]);
    //  }

     /*https://api.jquery.com/jQuery.ajax/*/
     $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "insertGalleryAjax.php",
            data: data,
            processData: false,//prevents from converting into a query string
            /*contentType option to false is used for multipart/form-data forms that pass files.
            When one sets the contentType option to false, it forces jQuery not to add a Content-Type header, otherwise, the boundary string will be missing from it.
            Also, when submitting files via multipart/form-data, one must leave the processData flag set to false, otherwise, jQuery will try to convert your FormData into a string, which will fail. */
 
            /*contentType: "application/x-www-form-urlencoded; charset=UTF-8", // this is the default value, so it's optional*/
 
            contentType: false, //contentType is the type of data you're sending,i.e.application/json; charset=utf-8
            cache: false,
            timeout: 600000,
            success: function (response) {
            //response is a STRING (not a JavaScript object -> so we need to convert)
            console.log("we had success!");
            console.log(response);
            let parsedJSON = JSON.parse(response);

            displayResponse(parsedJSON);
  //reset the form
 $('#insertGallery')[0].reset();
           },
           error:function(){
          console.log("error occurred");
        }
      });

       // validate and process form here
    function displayResponse(theResult){
      let container = $('<div>').addClass("outer");
      let title = $('<h3>');
      $(title).text("Results from user");
      $(title).appendTo(container);
      let contentContainer = $('<div>').addClass("content");
      for (let property in theResult) {
        console.log(property);
        if(property ==="fileName"){
          let img = $("<img>");
          $(img).attr('src','images/'+theResult[property]);
 
          $(img).appendTo(contentContainer);
        }
        else{
          let para = $('<p>');
          $(para).text(property+"::" +theResult[property]);
            $(para).appendTo(contentContainer);
        }
 
      }
      $(contentContainer).appendTo(container);
      $(container).appendTo("#result");
    }
   });
});
// here we put our JQUERY
</script>
</body>
</html>