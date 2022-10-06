$(document).ready(function () {
  // 1
  // open the dropdown menu when hovering the proposal button.
  $("#button").on("mouseover", function () {
    $("#dropdown-container").show();
  });
  // hide when mouse leaves
  $("#button").on("mouseout", function () {
    $("#dropdown-container").hide();
  });

  // 2
  // keep the dropdown contents visible while the mouse is hovering overing it.
  $("#dropdown-container").on("mouseover", function () {
    console.log("hover");
    $("#dropdown-container").show();
  });
  // hide the dropdown contents when mouse leaves the area.
  $("#dropdown-container").on("mouseout", function () {
    console.log("out");
    $("#dropdown-container").hide();
  });

  // 3
  // show the sub category contents when the cursor hovers over the similar projects anchor tag.
  $("#similar-project").on("mouseover", function () {
    $("#sub-dropdown-container").show();
  });
  // hide the contents when mouse leaves
  $("#similar-project").on("mouseout", function () {
    $("#sub-dropdown-container").hide();
  });

  // 4
  //  keep the sub categories visible for as long as the mouse is hovered on top of it .
  $("#sub-dropdown-container").on("mouseover", function () {
    $("#sub-dropdown-container").show();
  });
  $("#sub-dropdown-container").on("mouseout", function () {
    $("#sub-dropdown-container").hide();
  });
});
