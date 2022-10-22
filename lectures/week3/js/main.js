window.onload = function () {
  // get the canvas
  let canvas = document.getElementById("testCanvas");
  //a
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //get the context
  let context = canvas.getContext("2d");
  let oneTriangle = new TriangleShape(
    canvas.width / 2,
    canvas.height / 2,
    100,
    context
  );
  oneTriangle.display();

  window.addEventListener("resize", function (event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //invoke again - in order to update the triangle!!!
    oneTriangle.display();
    oneTriangle.setPoints(canvas.width / 2, canvas.height / 2);
  });

  requestAnimationFrame(animate);

// ANIMATE FUNCTION IS LIKE THE DRAW FUNCTION IN P5
  function animate() {
    //repaint with a black rect..
    //NEXT LINE ERASES PREV DRAWN SHAPE. 
    context.clearRect(0, 0, canvas.width, canvas.height);
    oneTriangle.update();
    oneTriangle.checkBounds(canvas);
    oneTriangle.display();
    requestAnimationFrame(animate);
  }

  //empty array
  let triangleArray = [];
  const NUM_TRI = 50; //new make a constant
 
// window.onload = function(){
// // get the canvas
// let canvas = document.getElementById("testCanvas");
// //a
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// //get the context
// let context = canvas.getContext("2d");
 
//ANYTHING OUTSIDE of animate function and not within another event handler WILL run only ONCE...
//OnLOAD...
for(let i=0; i<50; i++){
  triangleArray.push (new TriangleShape(i,(Math.random()* canvas.height),(Math.random()*30)+5,context));
}
 
requestAnimationFrame(animate);
function animate(){
 
//repaint with a black rect..
context.clearRect(0,0,canvas.width,canvas.height);
 
 
for(let i=0; i<NUM_TRI; i++){
  triangleArray[i].update();
  triangleArray[i].checkBounds(canvas);
  triangleArray[i].display();
}
requestAnimationFrame(animate);
 
}//end animate
}//end load
