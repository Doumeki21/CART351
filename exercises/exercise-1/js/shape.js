class Square {
  constructor(x, y, context) {
    this.localCanvasContext = context;
    this.fillColor = "#8ED6FF";
    this.strokeColor = "#FFFFFF";

    this.centerX = x;
    this.centerY = y;
    //new vars for speed:
    this.speedX = 2;
    this.speedY = 4;
  }

  update(width, height, fileColor) {
    this.centerX += this.speedX;
    this.centerY += this.speedY;
    this.draw(fileColor);
    this.checkScreenBounds(width, height);
  }

  checkScreenBounds(width, height) {
    if (this.centerX > width || this.centerX < 0) {
      this.speedX = this.speedX * -1;
    }

    if (this.centerY > height || this.centerY < 0) {
      this.speedY = this.speedY * -1;
    }
  }

  draw(fileColor) {
    this.localCanvasContext.fillStyle = fileColor;
    this.localCanvasContext.beginPath();
    this.localCanvasContext.rect(this.centerX, this.centerY, 150, 100);
    this.localCanvasContext.stroke();
    this.localCanvasContext.fill();

    this.localCanvasContext.strokeStyle = this.strokeColor;
    this.localCanvasContext.lineWidth = 2;
    this.localCanvasContext.stroke();
    this.localCanvasContext.closePath();
  }

//   mouse
  checkBounds(localCanvas) {
    if (this.x > localCanvas.width || this.x < 0) {
      this.speedX = this.speedX * -1;
    }

    if (this.y > localCanvas.height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
  }
}
