//The object class
class Square {
  constructor(x, y, context) {
    this.localCanvasContext = context;
    this.fillColor = "#8ED6FF";
    this.strokeColor = "#FFFFFF";

    this.squareX = x;
    this.squareY = y;
    //new vars for speed:
    this.speedX = 2;
    this.speedY = 4;
  }

  // to update the object (square), speed, color, and boundaries.
  update(width, height, fileColor) {
    this.squareX += this.speedX;
    this.squareY += this.speedY;
    this.draw(fileColor);
    this.checkScreenBounds(width, height);
  }

  // square changes position
  updatePosition(x, y) {
    this.squareX = x;
    this.squareY = y;
  }

  //Check when square rebounds
  checkScreenBounds(width, height) {
    if (this.squareX > width || this.squareX < 0) {
      this.speedX = this.speedX * -1;
    }

    if (this.squareY > height || this.squareY < 0) {
      this.speedY = this.speedY * -1;
    }
  }

  //draw the square
  draw(fileColor) {
    this.localCanvasContext.fillStyle = fileColor;
    this.localCanvasContext.beginPath();
    this.localCanvasContext.rect(this.squareX, this.squareY, 150, 100);
    this.localCanvasContext.stroke();
    this.localCanvasContext.fill();

    this.localCanvasContext.strokeStyle = this.strokeColor;
    this.localCanvasContext.lineWidth = 2;
    this.localCanvasContext.stroke();
    this.localCanvasContext.closePath();
  }
}
