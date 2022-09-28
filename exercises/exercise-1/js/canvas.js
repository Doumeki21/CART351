// once the DOM is loaded-
window.onload = function () {
  // get the canvas
  let canvas = document.getElementById("myCanvas");

  // for resizing purposes
  let previousCanvasWidth = (canvas.width = canvas.clientWidth);
  let previousCanvasHeight = (canvas.height = canvas.clientHeight);

  //get the context
  let context = canvas.getContext("2d");
  let file = new File("#8ED6FF");
  let square = new Square(10, 10, context);
  square.draw();

  requestAnimationFrame(animate);

  //HTML CANVAS: animates the object
  function animate() {
    let pBox = canvas.getBoundingClientRect();
    square.update(pBox.width, pBox.height, file.fileColor());

    // need to call CONTINUOUSLY
    requestAnimationFrame(animate);
  }

  //Check for the screen resize
  window.addEventListener("resize", canvasChange);

  function canvasChange(event) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    // To reposition the square according to the new size
    let pBox = canvas.getBoundingClientRect();
    let newSquareX = (square.squareX / previousCanvasWidth) * pBox.width;
    let newSquareY = (square.squareY / previousCanvasHeight) * pBox.height;
    previousCanvasWidth = pBox.width;
    previousCanvasHeight = pBox.height;
    square.updatePosition(newSquareX, newSquareY);

    square.draw();
  }

  //   CREATE SHAPE WITH MOUSE CLICK
  //add a mouseListener to canvas
  canvas.addEventListener("click", canvasIsActive);

  function canvasIsActive(event) {
    // calculate the offset
    //GETBOUNDINGCLIENTRECT >> THE CANVAS
    let pBox = this.getBoundingClientRect();
    // the one we use ...diff
    let mouse_offset_x = event.clientX - pBox.x;
    let mouse_offset_y = event.clientY - pBox.y;

    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    let square = new Square(mouse_offset_x, mouse_offset_y, context);
    square.draw(file.fileColor());
  }
};
