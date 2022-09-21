// DRAW THE TRAINGLE
class TriangleShape {
  constructor(x, y, lineLength, context) {
    this.lineLength = lineLength;

    this.localCanvasContext = context;
    this.fillColor = "#8ED6FF";
    this.strokeColor = "#FFFFFF";

    // //new vars for speed:
    // this.speedX = 2;
    // this.speedY = 4;

    //randomize color :)
    this.fillColor = `rgba(
        ${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)}
      )`;
      //randomize speed
      this.speedX  =(Math.random()*2)+2;
      this.speedY  =(Math.random()*2)+2;;

    //made into a method so that at any time we can update the triangle ...
    this.setPoints(x, y);
  }
  //method to display the triangle using the HTML 5 canvas API
  display() {
    this.localCanvasContext.fillStyle = this.fillColor;
    this.localCanvasContext.beginPath();
    this.localCanvasContext.moveTo(this.x1, this.y1);
    this.localCanvasContext.lineTo(this.x2, this.y2);
    this.localCanvasContext.lineTo(this.x3, this.y3);
    this.localCanvasContext.lineTo(this.x1, this.y1);
    this.localCanvasContext.fill();

    this.localCanvasContext.strokeStyle = this.strokeColor;
    this.localCanvasContext.lineWidth = 2;
    this.localCanvasContext.stroke();
    this.localCanvasContext.closePath();
  }
  //method to update the points ...
  setPoints(x, y) {
    //p1
    this.x1 = x;
    this.y1 = y;
    //p2
    this.x2 = this.x1 + this.lineLength;
    this.y2 = this.y1;
    //p3
    this.x3 = this.x1 + this.lineLength / 2;
    this.y3 = this.y1 - this.lineLength;
  }

  update() {
    let newX = this.x1 + this.speedX;
    let newY = this.y1 + this.speedY;
    //  console.log("herere;; "+ this.speedY);
    //set the points
    this.setPoints(newX, newY);
  }

  // ENSURE THE SHAPE BOUNCES AT EACH EDGE
  checkBounds(localCanvas) {
    if (this.x1 > localCanvas.width || this.x1 < 0) {
      this.speedX = this.speedX * -1;
    }

    if (this.y1 > localCanvas.height || this.y1 < 0) {
      this.speedY = this.speedY * -1;
    }
  }
}
/** end class def **/
