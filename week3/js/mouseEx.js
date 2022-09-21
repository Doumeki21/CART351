window.onload = function () {
  // get the canvas
  let canvas = document.getElementById("testCanvas");
  //a
  canvas.width = window.innerWidth - (window.innerWidth / 100) * 20;
  canvas.height = window.innerHeight - (window.innerHeight / 100) * 13;

  //get the context
  let context = canvas.getContext("2d");

  //a TriangleShape
  let oneTriangle = new TriangleShape(
    canvas.width / 2,
    canvas.height / 2,
    40,
    context
  );
  oneTriangle.display();

  requestAnimationFrame(animate);

  function animate() {
    //repaint with a black rect..
    context.clearRect(0, 0, canvas.width, canvas.height);
    //oneTriangle.update();
    //oneTriangle.checkBounds(canvas);
    oneTriangle.display();
    requestAnimationFrame(animate);
  }

  //add a mouseListener to canvas
  canvas.addEventListener("mousemove", canvasIsActive);

  /* our call back when the mouse moves within the canvas */
  //USE CLIENT X AND Y WHEN DOING ANYTHING WITH MOUSE (MOVING WITHIN A CANVAS)
  function canvasIsActive(event) {
    document.getElementById(
      "messageA"
    ).innerHTML = `original mouse x: <span class = "high">${event.clientX}</span>
      and original mouse y: <span class = "high">${event.clientY}</span>`;

    // calculate the offset
    //GETBOUNDINGCLIENTRECT >> THE CANVAS
    let pBox = this.getBoundingClientRect();
    // the one we use ...diff
    let mouse_offset_x = Math.floor(event.clientX - pBox.x);
    let mouse_offset_y = Math.floor(event.clientY - pBox.y);

    //append
    document.getElementById(
      "messageB"
    ).innerHTML = ` offset mouse x: <span class = "high">${mouse_offset_x}</span>
    and offset mouse y: <span class = "high">${mouse_offset_y}</span>`;

    oneTriangle.checkMouseCollision(mouse_offset_x, mouse_offset_y);
  }
};
