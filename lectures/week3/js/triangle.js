window.onload = function () {
  // get the canvas
  let canvas = document.getElementById("testCanvas");
  //add these lines after declaring the canvas....
  //ADAPTIVE WEBPAGE (not responsive)
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //get the context
  let context = canvas.getContext("2d");
  //would usually be black
  context.fillStyle = "#8ED6FF"; // change the color we are using
  // can use properties of the canvas object -> width, height ...
  //console.log(canvas);
  // note how we can use variables to generalize...
  let lineLength = 100;
  let x1 = canvas.width / 2;
  let y1 = canvas.height / 2;
  let x2 = x1 + lineLength;
  let y2 = canvas.height / 2;
  let x3 = x1 + lineLength / 2;
  let y3 = y1 - lineLength;

//   // lets draw a triangle:
//   //The lineTo() method adds a new point and creates a line
//   //TO that point FROM the last specified point in the canvas
//   //(this method does not draw the line) -rather the stroke/fill does.
//   context.beginPath(); //start a path
//   context.moveTo(x1, y1); //where to start drawing
//   context.lineTo(x2, y2); //lineTo(where to go from last...)
//   context.lineTo(x3, y3);
//   context.lineTo(x1, y1);
//   context.fill();
//   context.strokeStyle = "#FFFFFF"; // change the color we are using
//   context.lineWidth = 2;
//   context.stroke();
//   context.closePath(); //end a path ...

// RESPONSIVE CANVAS
  window.addEventListener('resize', function(event) {
    //console.log("resize");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawTriangle();
    });

    //simple function for drawing a triangle
function drawTriangle(){
    //The lineTo() method adds a new point and creates a line
    //TO that point FROM the last specified point in the canvas
    //(this method does not draw the line) -rather the stroke/fill does.
    context.fillStyle = "#8ED6FF"; // change the color we are using
    context.beginPath(); //start a path
    context.moveTo(x1,y1); //where to start drawing
    context.lineTo(x2,y2); //lineTo(where to go from last...)
    context.lineTo(x3,y3);
    context.lineTo(x1,y1);
    context.fill();
   
    context.strokeStyle = "#FFFFFF"; // change the color we are using
    context.lineWidth =2;
    context.stroke();
    context.closePath(); //end a path ...
   
  }//function drawTriangle

  window.addEventListener('resize', function(event) {
    //console.log("resize");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawTriangle();
     
    });
};
