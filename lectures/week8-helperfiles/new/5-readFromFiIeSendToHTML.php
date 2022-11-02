<?php
if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["getAjaxOnClick"]))
{
  //echo("here");
  //get the data
   //exit;
   $theFile = fopen("files/testInput.txt", "r") or die("Unable to open file!");
   //read until eof
   //$i=0;
   $outArr = array();
   $NUM_PROPS = 3;
    //echo("test");
      while(!feof($theFile)) {
        //create an object to send back

        $packObj=new stdClass();

        for($j=0;$j<$NUM_PROPS;$j++){
          
          $str = fgets($theFile);
          //split and return an array ...
          $splitArr = explode(":",$str);
          $key = $splitArr[0];
          if(isset($splitArr[1])){
          $val = $splitArr[1];
        
          //append the key value pair
          $packObj->$key = trim($val);
        }
      }
        $outArr[]=$packObj;
      }

      fclose($theFile);
        // var_dump($outArr);
        // Now we want to JSON encode these values to send them to $.ajax success.
      $myJSONObj = json_encode($outArr);
      echo $myJSONObj;
      exit;
}

?>

<!DOCTYPE html>
<html>
<head>
<title>5- READ AND OUTPUT EXAMPLE </title>
<!-- get JQUERY -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<style>
body{
  background:black;
}
.wrapper-flex{
  display:flex;
    background:rgba(0, 137, 255,0.1);
  flex-wrap: wrap;
}
.single_container{
  background:rgba(0, 137, 255,0.65);
  width:25%;
  margin:3%;
  color:white;
  overflow-wrap: break-word; /** wrap text */
  padding:1%;
}
.single_container h1{
    padding:2%;
    background:rgba(0, 137, 255,0.55);

}
.single_container h2{
    padding:2%;
    background:rgba(0, 137, 255,0.45);

}
.single_container h3{
    padding:2%;
    background:rgba(0, 137, 255,0.35);

}
span{
  display:inline-block;
  color: rgba(255, 255, 255,0.35);
  width:50%;

}
#result{
  color:white;
}


</style>

</head>
<body>
  <!-- NEW for the result -->
<div id = "result"><h3> CLICK TO GET RESULTS </h3><div class = "wrapper-flex"></div> </div>
<script>
// here we put our JQUERY
$(document).ready (function(){
console.log("in doc load");
$(document).on("click",getDataOnClick);


function getDataOnClick(){
  //directly here we get the data ...
  $.ajax({
    url: "5-readFromFiIeSendToHTML.php",
    type: "get", //send it through get method
    data: {getAjaxOnClick: "fread"}, //parameter (no form data)
    success: function(response) {
    //Do Something
    console.log("responded" +response);
    //use the JSON .parse function to convert the JSON string into a Javascript object
    let parsedJSON = JSON.parse(response);
    console.log(parsedJSON);

    //remove any rogues
    let filtered = parsedJSON.filter(
    function(item){
      return item["ANIMAL"]!==undefined
    }

  );
  console.log(filtered);
  showResults(filtered);

  },
  error: function() {
    console.log("error occurred");
  }
});
}
//show the results...
function showResults(parsedJSONArray){
  $(".wrapper-flex").empty();
  let test = (100/parsedJSONArray.length)/100;
  let alpha = 1.0;

  for(let i =0; i<parsedJSONArray.length;i++){

    let container = $("<div>");
    $(container).addClass("single_container");
    $(container).css("opacity",alpha);
    alpha=alpha-test;
    let h1 = $("<h1>");
    h1.html("<span> ANIMAL: </span>"+parsedJSONArray[i].ANIMAL);
    $(container).append(h1);

    let h2 = $("<h2>");
    h2.html("<span>COLOR: </span>"+parsedJSONArray[i].COLOR);
    $(container).append(h2);

    let h3 = $("<h3>");
    h3.html("<span>FAVORITE NUMBER:</span>"+parsedJSONArray[i].FAVNUM);
    $(container).append(h3);
    $('.wrapper-flex').append(container);
  }
 }

});



</script>
</body>
</html>
