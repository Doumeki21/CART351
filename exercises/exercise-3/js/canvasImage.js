$(document).ready(function () {
  //event listener for download
  document.getElementById("submit").addEventListener("click", function () {
    // step 1: grab canvas data - put in an image container
    let imgURL = canvas.toDataURL("image/png");
    document.getElementById("imageContainer").src = imgURL;
    let data = new FormData();
    data.append("imageTest", imgURL);
    //we do not have to have this - it is just for demo
    $.ajax({
      type: "POST",
      enctype: "multipart/form-data",
      url: "/canvasSave.php",
      data: data,
      processData: false, //prevents from converting into a query string
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (response) {
        //reponse is a STRING (not a JavaScript object -> so we need to convert)
        console.log("we had success!");
        console.log(response);
      },
      error: function () {
        console.log("error occurred");
      },
    });
  });
});
