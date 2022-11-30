
$(document).ready(function () {
  //1. DRAWING
  // THE DRAWING PAGE //
  // wait for the content of the window element
  // to load, then performs the operations.
  // This is considered best practice.

    resize(); // Resizes the canvas once the window loads
    document.addEventListener("mousedown", startPainting);
    document.addEventListener("mouseup", stopPainting);
    document.addEventListener("mousemove", sketch);
    window.addEventListener("resize", resize);
  });

  const canvas = document.querySelector("#canvas");

  // Context for the canvas for 2 dimensional operations
  const ctx = canvas.getContext("2d");
  let newSketch = true;

  // Resizes the canvas to the available size of the window.
  function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  // Stores the initial position of the cursor
  let coord = { x: 0, y: 0 };

  // This is the flag that we are going to use to
  // trigger drawing
  let paint = false;

  // Updates the coordianates of the cursor when
  // an event e is triggered to the coordinates where
  // the said event is triggered.
  function getPosition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
  }

  // The following functions toggle the flag to start
  // and stop drawing
  function startPainting(event) {
    if (newSketch === true) {
      ctx.fillStyle = "#f4d1c1";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      newSketch = false;
    }

    paint = true;
    getPosition(event);
  }

  function stopPainting() {
    paint = false;
  }

  function sketch(event) {
    if (!paint) return;
    ctx.beginPath();
    ctx.lineWidth = 5;

    // Sets the end of the lines drawn
    // to a round shape.
    ctx.lineCap = "round";
    ctx.strokeStyle = "green";

    // The cursor to start drawing
    // moves to this coordinate
    ctx.moveTo(coord.x, coord.y);

    // The position of the cursor
    // gets updated as we move the
    // mouse around.
    getPosition(event);

    // A line is traced from start
    // coordinate to this coordinate
    ctx.lineTo(coord.x, coord.y);

    // Draws the line.
    ctx.stroke();
  }

  function goBack() {
    window.location.href = "gallery.php";
  }


  // Sabine's code sample
  //2. DOWNLOAD + SAVE IMAGE
  //event listener for download
  document.getElementById("submit").addEventListener("click", function () {
    document.getElementById("instruction").innerHTML = "Check out the gallery ◉‿◉";
    document.getElementById("instruction").style.color = "red";
    document.getElementById("goback").style.backgroundColor = "#ffa500";
    document.getElementById("goback").style.opacity = "1";
    $(this).css('background-color', '#c17e01');

    // step 1: grab canvas data - put in an image container
    let imgURL = canvas.toDataURL("image/png");
    // document.getElementById("imageContainer").src = imgURL;
    let data = new FormData();
    data.append("imageTest", imgURL);
    //we do not have to have this - it is just for demo
    $.ajax({
      type: "POST",
      enctype: "multipart/form-data",
      url: "canvasSave.php",
      data: data,
      processData: false, //prevents from converting into a query string
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (response) {
        //reponse is a STRING (not a JavaScript object -> so we need to convert)
        console.log("we had success!");
        console.log(response);
        newSketch = true;
        
      },
      error: function () {
        console.log("error occurred");
      },
    });
  });
