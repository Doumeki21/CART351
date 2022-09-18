// write code in DOMContentLoaded to load page properly before executing js.
document.addEventListener("DOMContentLoaded", function(event) {
    let closeButton = document.getElementById("close-button");

closeButton.onclick = function() {
    // {alert('bleh');};
    let mobileNavbar = document.getElementsByClassName("mobile-navbar");

    
    //toggle the close button (this already available in bootstrap)
    if (mobileNavbar[0].style.display === "none") {
        mobileNavbar[0].style.display = "block";
        closeButton.style.display = "block"; 
    }
    else {
        mobileNavbar[0].style.display = "none";
        closeButton.style.display = "none"; 
    }

    // let closeButton = document.getElementById("close-button");
    // document.getElementsByClassName("mobile-navbar").style.display = "none";
    }
});

