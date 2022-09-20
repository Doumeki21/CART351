// Load the (HTML) DOMContentLoaded page properly before executing js.
document.addEventListener("DOMContentLoaded", function (event) {
      // METHOD 1
    let closeButton = document.getElementById("close-button");
    closeButton.onclick = function () {
      // {alert('bleh');};
      let mobileNavbar = document.getElementsByClassName("mobile-navbar");
      //toggle the close button (this already available in bootstrap)
      if (mobileNavbar[0].style.display === "none") {
        mobileNavbar[0].style.display = "block";
        closeButton.style.display = "block";
      } else {
        mobileNavbar[0].style.display = "none";
        closeButton.style.display = "none";
      }
      // let closeButton = document.getElementById("close-button");
      // document.getElementsByClassName("mobile-navbar").style.display = "none";
    };
//   // METHOD 2: JQUERY
// let toggle = document.querySelector('#toggle');

// toggle.addEventListener('click', function(e)) {
//     e.preventDefault();
//     if (toggle.classList.contains('x')) {
//         toggle.classList.remove('x');
//     } else {
//         toggle.classList.add('x');
//     }
// }
});