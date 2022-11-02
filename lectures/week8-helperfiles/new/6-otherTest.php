<?php

// need to specify a parameter do that it gets the page first and does ajax ...
if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["getAjaxOnLoad"]))
{
  //echo("here");
  //get the data
   //exit;
   $outArr =[];
   $theFile = fopen("files/circles.txt", "r") or die("Unable to open file!");

   while(!feof($theFile)) {
     //create an object to send back
      $str = fgets($theFile);
    //  $packObj->$counter = trim($str);
      $outArr[]=$str;

   }

   $myJSONObj = json_encode($outArr);
   echo $myJSONObj;
   fclose($theFile);
   exit;

 }
//check if there has been something posted to the server to be processed
if($_SERVER['REQUEST_METHOD'] == 'POST'){

   $theFile = fopen("files/circles.txt", "a") or die("Unable to open file!");


  //echo(json_encode($_POST['lengthOfVals']));
  $length = intval($_POST['lengthOfVals']);
  for ($i=0;$i<$length; $i++){
  //echo(json_encode($_POST['e'.$i]));
    fwrite($theFile,$_POST['e'.$i]."\n");
  }
  fwrite($theFile, '{"END":"'.$_POST['lengthOfVals'].'"}'."\n");
  fclose($theFile);
  echo("done");
  exit;
}

?>

<!DOCTYPE html>
<html>
<head>
<title>OTHER </title>
<!-- get JQUERY -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<style>
body{
  background:black;

}

#ones{
  position:relative;
  width: 600px;
  height:100px;
  background:grey;
  margin-left: 300px;
  margin-top: 20px;
  display:flex;
  flex-wrap: wrap;
}
#grid{
  position:relative;
  width: 600px;
  height:600px;
  background:grey;
  margin-left: 300px;
  margin-top: 10px;
}
.circleShape{
  width:50px;
  height:50px;
  background:red;
  border-radius: 25px;
  position:absolute;
  text-align: center;
  cursor:pointer;
  opacity:1;
}




.circleShape:hover{
  opacity:.5;
}

.circleShape span{
  color:white;
  display:inline-block;
  top:15px;
  position:relative;
}


.taken{
  width:50px;
  height:50px;
  background:red;
  border-radius: 25px;
  text-align: center;
  opacity:1;
}

.taken span{
  color:white;
  display:inline-block;
  top:15px;
  position:relative;
}
#subbutton{
  background:orange;
  width:100px;
  margin-top:10px;
  margin-left:300px;
  text-align:center;
  cursor:pointer;
  color:white;
}
#resWords{
margin-top: 10px;
  background:#9999ff;
  width:20%;
}
#resWords h3{
  text-align: center;
  color:white;

}
.wordBox{
  background:white;
  width:max-content;
  margin-left:10px;
  padding:1%;
  margin-bottom:10px;
  font-size: 14px

}
.flex-wrapper{
  display:flex;
}


</style>

</head>
<body>
<div id = "ones"></div> <div id = subbutton> add to list </div>
<div class = "flex-wrapper">
<div id = "grid">
</div>
<div id = "resWords">
  <h3> WORDS FROM SERVER </h3>
</div>
</divs>
<script>
// here we put our JQUERY
// /${i* SPACER}
// ${j*SPACER}
$(document).ready (function(){
console.log("in doc load");

//LAST STEP READ FROM FILE ...

//directly here we get the data ...

$.ajax({
  url: "6-otherTest.php",
  type: "get", //send it through get method
  data: {getAjaxOnLoad: "fread"}, //parameter (no form data)
  success: function(response) {
  //Do Something
  console.log("responded" +response);
  let theIds = [];
  //use the JSON .parse function to convert the JSON string into a Javascript object
 let parsedJSON = JSON.parse(response);
  console.log(parsedJSON);
  let currentWord ="";
  //double parse ... because double encoded ...
  for (let i = 0; i<parsedJSON.length; i++){
    let ps = JSON.parse(parsedJSON[i]);
    //for the ids (if not the END tag)
    if(ps.END===undefined){
    theIds.push(parseInt(ps.id))
    //build
    currentWord+=ps.letter;
  }
  else
  {
    //check to make sure that current word is not empty
    if(currentWord!=''){
      console.log(currentWord);
      let newWord = $("<div>").addClass("wordBox").html(currentWord);
      $("#resWords").append(newWord);
        currentWord = "";
      }//if not empty
    }//at an END tag

}//finished parsing the file from server
//build CURRENT STATE OF GRID
goRun(theIds);
}
})

//only run once we have loaded  ...
function goRun(theIds)
{

//VARS TO START
const NUM_COLS = 12;
const NUM_ROWS =12;
const SPACER =50;
let takenOnes = [];
const alphabet = "abcdefghijklmnopqrstuvwxyz";
//console.log(theIds);

for(let i = 0; i< NUM_ROWS; i++){
  for(let j=0; j<NUM_COLS; j++){

    if(theIds.includes(i*NUM_COLS+j)){
      //console.log("is in")
      //DO NOR MAKE A NEW CIRCLE

    }
    else{
    //ELSE MAKE NEW ONES
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    let col = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;

    let circle = $("<div>").addClass("circleShape").css({"background":col,"top":`${i* SPACER}px`,"left":`${j* SPACER}px`}).attr("id",i*NUM_COLS+j).html(`<span>${randomCharacter}</span>`).appendTo($("#grid"));

    $(circle).on("click",function(){
      //console.log(this.id);
      // remove and add to array of taken
      console.log(circle[0]);
      takenOnes.push({
        "left": circle[0].style.left,
        "top":circle[0].style.top,
        "background": circle[0].style.background,
        "letter": circle[0].innerHTML,
        "id":circle[0].id

      })
      console.log(takenOnes)
      $(circle).remove();
      $(circle).appendTo("#ones").css({'top' : '', 'left' : '' }).removeClass("circleShape").addClass("taken");


  }) //click
}//if
} //j
}
//i
$("#subbutton").on("click", postTheData);

function postTheData(){
  let formData = new FormData();
  for(let i =0; i< takenOnes.length; i++){
    formData.append(`e${i}`, JSON.stringify(takenOnes[i]));
  }
  formData.append('lengthOfVals',JSON.stringify(takenOnes.length));



 $.ajax({
  type: "POST",
  url: "6-otherTest.php",
  processData: false,//prevents from converting into a query string
  contentType: "application/json; charset=utf-8",
  data:formData,
  contentType: false, //contentType is the type of data you're sending,i.e.application/json; charset=utf-8
  cache: false,
  timeout: 600000,
  success: function (response) {
  //response is a STRING (not a JavaScript object -> so we need to convert)
  console.log("we had success!");
  console.log(response);
  //empty the result array and the container ....each time we submit
  takenOnes =[];
  $("#ones").empty();

 },
 error:function(){
console.log("error occurred");
}
});

}//function

} //goRun

});//onload








</script>
</body>
</html>
