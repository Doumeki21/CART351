window.onload = function(){
//1: event listener
document.getElementById("parent").addEventListener("mousemove",mouseMoveHandler);

//rect to change
let rectInter = document.getElementById("inter");


//2 : our call back...
function mouseMoveHandler(event){
  //get mouse coordinates and calculate the offset
  //WHY can we use this?
  //console.log(this);
  let pBox = this.getBoundingClientRect();
  //console.log(pBox);
  // the one we use ...diff
  let mouse_offset_x = event.clientX-pBox.x;
  let mouse_offset_y = event.clientY-pBox.y;
  //P1:: for debugging
//  console.log("mouse offset x:: "+mouse_offset_x);
//  console.log("mouse offset y:: "+mouse_offset_y);

  //p2
  if(mouse_offset_x>0 && mouse_offset_x<=300){
    console.log("between 0 and 299");
    rectInter.style.left = 0+"px";
    rectInter.style.background = "#555555";

  }
  else if (mouse_offset_x>300 && mouse_offset_x<600){
    console.log("between 300 and 599");
    rectInter.style.left = 300+"px";
    rectInter.style.background = "#337aff";

  }
  else {
    console.log("greater then or equal to 600");
    rectInter.style.left = 600+"px";
    rectInter.style.background = "#ff339c";

  }

 }
}//onload
