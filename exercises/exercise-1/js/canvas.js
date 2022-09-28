window.onload = function () {
  // get the canvas
  let canvas = document.getElementById("myCanvas");

  canvas.width = window.innerWidth - window.innerWidth / 100 * 50;
  canvas.height = window.innerHeight - window.innerHeight / 100 * 50;

  //get the context
  let context = canvas.getContext("2d");

  let file = new File("#708a81");
  //   file.fileColor();

  let square = new Square(10, 10, context);
  square.draw();

  requestAnimationFrame(animate);

  function animate() {
    //console.log("animate");
    let pBox = canvas.getBoundingClientRect();
    square.update(pBox.width, pBox.height, file.fileColor());
    // console.log("" + file.fileColor());

    //5: call to check the edges ...
    // square.checkScreenBounds();
    // console.log("hit")
    // need to call CONTINUOUSLY
    requestAnimationFrame(animate);
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
