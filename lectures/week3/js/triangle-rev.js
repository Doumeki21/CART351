/** our class def for the triangle **/
class TriangleShape {
  constructor(x, y, lineLength, context) {
    this.lineLength = lineLength;

    this.localCanvasContext = context;
    this.fillColor = "#8ED6FF";
    this.strokeColor = "#FFFFFF";

    //made into a method so that at any time we can update the triangle ...
    this.centerX = x;
    this.centerY = y;
    this.setPoints(this.centerX/2, this.centerY/2);
    //new vars for speed:
    this.speedX = 2;
    this.speedY = 4;
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
  //NEW:: change set points!
  setPoints(x, y) {
    //x and y are NOW THE center points of triangle

    this.x1 = x - this.lineLength / 2;
    this.y1 = y + this.lineLength / 2;
    //p2
    this.x2 = x + this.lineLength / 2;
    this.y2 = y + this.lineLength / 2;
    //p3
    this.x3 = x;
    this.y3 = y - this.lineLength / 2;
  }

  update() {
    this.centerX = this.centerX + this.speedX;
    this.centerY = this.centerY + this.speedY;
    this.setPoints(this.centerX, this.centerY);
  }

  checkBounds(localCanvas) {
    if (this.x1 > localCanvas.width || this.x1 < 0) {
      this.speedX = this.speedX * -1;
    }

    if (this.y1 > localCanvas.height || this.y1 < 0) {
      this.speedY = this.speedY * -1;
    }
  }

    // NEVER AIM FOR ACCURACY IN COLISION DETECTION. EITHER GIVE A SURROUNDING BOX OR CIRCLE.
  checkMouseCollision(eX, eY){
    if (eX>this.x1 && eX<this.x2){
      if(eY > this.y3 && eY<this.y1){
       console.log("colliding");
       this.setPoints(eX,eY);
       this.fillColor = "red"
      }
      //no y match
      else{this.fillColor = "#8ED6FF";}
    }
    //no x match
    else{this.fillColor = "#8ED6FF";}
  }//check
}
/** end class def **/
