<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="js/libraries/jquery-3.6.1.min.js"></script>

    <title>Reference</title>
</head>
<body>
      
      <p id="demo"></p>
     
      <div id="goback">
         <button class ="button" onclick="goBack()">Go back!</button>
      </div>
      <canvas id="canvas" width="800" height="600" style="position:absolute;top:0%;left:0%;"></canvas>
    <script>
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      var newSub = "Ted Talk";

      console.log(newSub);
      var start = (function(e){
        let gamestart = false;
        console.log("click");
        console.log(gamestart);
        return function() {
          if (!gamestart) {
              gamestart = true;
              // do something
              drawing();
          }
        };
      })();

      function goBack() {
        window.location.href = 'Main_Page.php';

      }

      function drawing () {
            let ended = false;
            document.getElementById('onloadText').style.display = "none";
            var radius = 4;
            var dragging = false;
            // let timer = 30;
            // document.getElementById("demo").innerHTML = timer;
            // let timerId = setInterval(function(){ timer--; document.getElementById("demo").innerHTML = timer; console.log(timer);}, 1000);
            // setTimeout(() => { clearInterval(timerId); document.getElementById("demo").innerHTML = ""; saveImage();stop(); ended = true; console.log(ended);}, 30000);


            // function stop() {
            //   canvas.removeEventListener('mousedown', engage);
            //   canvas.removeEventListener('mousemove',putPoint);
            //   canvas.removeEventListener('mouseup', disengage);
	        //     canvas.removeEventListener('touchstart', engageTouch);
            //   canvas.removeEventListener('touchmove',putPointTouch);
            //   canvas.removeEventListener('touchend', disengageTouch);
            //   document.getElementById('canvas').style.position = "relative";
            // }

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            context.lineWidth = radius*2;

            var putPoint = function(e){
              if(dragging){
                context.lineTo(e.offsetX, e.offsetY);
                context.stroke();
                context.beginPath();
                //context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
                context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
                context.fill();
                context.beginPath();
                context.moveTo(e.offsetX, e.offsetY);
              }
            }

	           var putPointTouch = function(e){
		              e.preventDefault();
              putPoint(e);
            }

            var engage = function(e){
              dragging = true;
              putPoint(e);
            }

	           var engageTouch = function(e){
                 engage(e);
            }

            // var disengage = function(){
            //   dragging = false;
            //   context.beginPath();
            // }

	        //    var disengageTouch = function(e){
		    //           e.preventDefault();
            //   disengage(e);
            // }

            canvas.addEventListener('touchstart', engageTouch);
            canvas.addEventListener('touchmove',putPointTouch);
            canvas.addEventListener('touchend', disengageTouch);
            canvas.addEventListener('mousedown', engage);
            canvas.addEventListener('mousemove',putPoint);
            canvas.addEventListener('mouseup', disengage);

        } // end of drawing

        // let saveImage = function(ev) {


        //   document.getElementById('formContainer').style.display = "inline";

        //   console.log("yo")
        //   $('#canvas')[0].toBlob((blob) => {
        //      let URLObj = window.URL || window.webkitURL;
        //      let a = document.createElement("a");
        //      a.href = URLObj.createObjectURL(blob);
        //      document.body.appendChild(a);
        //      document.body.removeChild(a);

        //   $(document).ready (function(){
        //       var pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // PNG is the default
        //       $("#insertGallery").submit(function(event) {

        //        //stop submit the form, we will post it manually. PREVENT THE DEFAULT behaviour ...
        //        event.preventDefault();
        //        console.log("button clicked");
        //        let form = $('#insertGallery')[0];
        //        let data = new FormData(form);
        //        data.append("a_new_subject",newSub);
        //        data.append("filename",blob);
        //        console.log(data);
        //        $.ajax({
        //               type: "POST",
        //               enctype: 'multipart/form-data',
        //               url: "Play_Page.php",
        //               data: data,
        //               processData: false,//prevents from converting into a query string
        //               contentType: false,
        //               cache: false,
        //               timeout: 600000,
        //               success: function (response) {
        //               //reponse is a STRING (not a JavaScript object -> so we need to convert)
        //               console.log(response);
        //             //use the JSON .parse function to convert the JSON string into a Javascript object
        //             // let parsedJSON = JSON.parse(response);
        //             // console.log(parsedJSON);
        //             // displayResponse(parsedJSON);
        //              },
        //              error:function(){
        //             console.log("error occurred");
        //           }
        //         });
        //         document.getElementById('formContainer').style.display = "none";
        //         document.getElementById('goback').style.display = "inline";
        //      });
        //      // validate and process form here
        //   });
        // });//blob
        // } // end of saveImage()

        canvas.addEventListener('click', start);
    </script>
</html>