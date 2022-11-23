<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <!-- https://www.geeksforgeeks.org/how-to-draw-with-mouse-in-html-5-canvas/ -->
    <script src = "libraries/jquery-3.6.1.min.js"></script>

    <title>Exercise 3</title>

</head>
<body>
    <section>
        <div>
            <button id="goback" class ="button" onclick="goBack()">Art Gallery</button>
         </div>
         <br>
        <div>
            <button id="submit" class ="button" onclick="submit()">Submit Masterpiece</button>
     </div>
</section>
    
        <!-- <li class="right-section"> -->
            <canvas id="canvas"></canvas>
        <!-- </li> -->
          

    <script>
    //     // THE DRAWING PAGE //
    // // wait for the content of the window element
    // // to load, then performs the operations.
    // // This is considered best practice.
    // window.addEventListener('load', ()=>{
            
    //         resize(); // Resizes the canvas once the window loads
    //         document.addEventListener('mousedown', startPainting);
    //         document.addEventListener('mouseup', stopPainting);
    //         document.addEventListener('mousemove', sketch);
    //         window.addEventListener('resize', resize);
    //     });
            
    //     const canvas = document.querySelector('#canvas');
        
    //     // Context for the canvas for 2 dimensional operations
    //     const ctx = canvas.getContext('2d');
    //     let newSketch = true;
      
    //     // Resizes the canvas to the available size of the window.
    //     function resize(){
    //     ctx.canvas.width = window.innerWidth;
    //     ctx.canvas.height = window.innerHeight;
    //     }
            
    //     // Stores the initial position of the cursor
    //     let coord = {x:0 , y:0};
        
    //     // This is the flag that we are going to use to
    //     // trigger drawing
    //     let paint = false;
            
    //     // Updates the coordianates of the cursor when
    //     // an event e is triggered to the coordinates where
    //     // the said event is triggered.
    //     function getPosition(event){
    //     coord.x = event.clientX - canvas.offsetLeft;
    //     coord.y = event.clientY - canvas.offsetTop;
    //     }
        
    //     // The following functions toggle the flag to start
    //     // and stop drawing
    //     function startPainting(event){
    //         if(newSketch===true){
    //         ctx.fillStyle = "red";
    //         ctx.fillRect(0,0, window.innerWidth, window.innerHeight);
    //         newSketch=false;
    //         }
        
    //     paint = true;
    //     getPosition(event);
    //     }

    //     function stopPainting(){
    //     paint = false;
    //     }
            
    //     function sketch(event){
    //     if (!paint) return;
    //     ctx.beginPath();
    //     ctx.lineWidth = 5;
        
    //     // Sets the end of the lines drawn
    //     // to a round shape.
    //     ctx.lineCap = 'round';
            
    //     ctx.strokeStyle = 'green';
            
    //     // The cursor to start drawing
    //     // moves to this coordinate
    //     ctx.moveTo(coord.x, coord.y);
        
    //     // The position of the cursor
    //     // gets updated as we move the
    //     // mouse around.
    //     getPosition(event);
        
    //     // A line is traced from start
    //     // coordinate to this coordinate
    //     ctx.lineTo(coord.x , coord.y);
            
    //     // Draws the line.
    //     ctx.stroke();
    //     }

    //     function goBack() {
    //     window.location.href = 'gallery.php';
    //   }
        
    </script>

    <!-- My script(s) -->
    <script src="js/canvasImage.js"></script>
</body>
</html>