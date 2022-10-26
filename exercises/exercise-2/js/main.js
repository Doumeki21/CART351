$(document).ready(function () {
  let transtate = "state-two";

  $("#choose-day").submit((e) => {
    e.preventDefault(); //prevents the form from returning to its initial state after the page reloads from triggering the submit btn.

    // transition to different pulse states based on the day of the week. 
    let dayValue = $("#week-day").val();
    if (dayValue === "Friday") {
      transtate = "state-one";
    }
    if (dayValue === "Saturday") {
      transtate = "state-three";
    }
    if (dayValue === "Sunday") {
      transtate = "state-four";
    }
    if (dayValue === "Monday") {
      transtate = "state-five";
    }
    console.log(transtate);

    // window.requestAnimationFrame(loop);
    // let scaleVal = 1;
    // let time = 0.005;

    // function loop() {
    //   if (scaleVal < 1 || scaleVal > 1) {
    //     time *= -1;
    //   }
    //   // document.getElementById("content").style.width = `${width}px`;
    //   // document.getElementById("content").style.height = `${width}px`;
    //   document.getElementById(
    //     "pulse"
    //   ).style.transform = `scale(${scaleVal},${scaleVal})`;
    //   scaleVal += time;
    //   window.requestAnimationFrame(loop);
    // }

    $(`#results-container`).empty(); //resets the results every load.

    // get the json data.
    $.getJSON("loadFiles/stress.json", function (data) {
      // set boolean to true
      loaded = true;
      findDayData(data, dayValue);
    })
      // fail
      .fail(function () {
        console.log("error");
      });
  });

  //   Dsiplay the text results on screen.
  function displayDay(day, dayQuality, sleepQuality) {
    let textDay = $(
      `<h2>On ${day}, I had a ${dayQuality} day.</h2> <h2>I got ${sleepQuality} hours of sleep.</h2>`
    );
    textDay.addClass("text-day").appendTo("#results-container");
  }

  // Does what the filter function does.
  function findDayData(data, dayValue) {
    for (let i = 0; i < data.days.length; i++) {
      $.each(data.days[i], function (index, value) {
        if (value === dayValue) {
          displayDay(
            data.days[i].day,
            data.days[i].quality,
            data.days[i].sleep
          );
        }
      });
    }
  }

  // // JQUERY ANIMATE
  // $( "#submit-button" ).click(function() {
  //   $( "#pulse" ).animate({
  //     opacity: 0.5,
  //     transform: "toggle"
  //   }, 5000, function() {
  //     // Animation complete.
  //   });
  // });

  // https://www.kirupa.com/html5/looping_a_css_transition.htm
  //   1. TRIGGER THE PULSE ANIMATION
  let theCircle = document.querySelector("#pulse");

  function setup() {
    //   console.log( document.getElementById("submit-button"));
    //  document.getElementById("submit-button").addEventListener("click", setInitialClass, false);
    theCircle.addEventListener("mouseover", setInitialClass, false);

    theCircle.addEventListener("transitionend", loopTransition, false);
    theCircle.addEventListener("webkitTransitionEnd", loopTransition, false);
    theCircle.addEventListener("mozTransitionEnd", loopTransition, false);
    theCircle.addEventListener("msTransitionEnd", loopTransition, false);
    theCircle.addEventListener("oTransitionEnd", loopTransition, false);
  }
  setup();

  function setInitialClass(e) {
    theCircle.className = transtate;
    // console.log(theCircle.className);
  }

  function loopTransition(e) {
    // alternate b/w classes
    console.log(transtate);
    if (e.propertyName == "opacity") {
      if (theCircle.className == transtate) {
        theCircle.className = "state-one";
      } else {
        theCircle.className = transtate;
      }
    }
  }
});
