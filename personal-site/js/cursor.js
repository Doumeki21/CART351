//put on the parent;
document.getElementById("parent").addEventListener("mousemove", mouseCapture);

function mouseCapture() {

  //2:: put in center
  let mBox = document.getElementById("moveMe").getBoundingClientRect();
  // console.log(mBox);

  // //3:: need the parent offset::
  //     //NOTE that mouseEVent coordinates are ALWAYS relative to the window ...
  //getBoundingClientRect becomes parent here!
  let pBox = this.getBoundingClientRect();
  //Here we calculate the offset depending where the parent is!!
  let mouse_offset_x = event.clientX - pBox.x;
  let mouse_offset_y = event.clientY - pBox.y;

  document.getElementById("moveMe").style.left = (mouse_offset_x - mBox.width / 2) + 1 + "px";
  document.getElementById("moveMe").style.top = (mouse_offset_y - mBox.height / 2) + 1 + "px";
}