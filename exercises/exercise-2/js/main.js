$(document).ready(function () {
  $("#choose-day").submit((e) => {
    let dayValue = $("#week-day").val();
    e.preventDefault(); //prevents the form from returning to its initial state after the page reloads from triggering the submit btn.

    $(`#results-container`).empty(); //resets the results.

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
      `<h2>On ${day}, I had a ${dayQuality} day.</h2> <br> <h2>I got ${sleepQuality} hours of sleep.`
    );
    textDay.addClass("text-day").appendTo("#results-container");
  }

  function findDayData(data, dayValue) {
    for (let i = 0; i < data.days.length; i++) {
      $.each(data.days[i], function (index, value) {
        if (value === dayValue) {
          //   hourToColor(data.days[i].Awake, data.days[i].Asleep);
          //   wakeUpNight(data.days[i].WakeUp);
          //   bedAndUpTime(data.days[i].Bed, data.days[i].Up);
          displayDay(data.days[i].day, data.days[i].quality);
        }
      });
    }
  }

  // https://www.kirupa.com/html5/looping_a_css_transition.htm
  //   1. TRIGGER THE PULSE ANIMATION
  let theCircle = document.querySelector("#pulse");

  function setup() {
    theCircle.addEventListener("mouseover", setInitialClass, false);

    theCircle.addEventListener("transitionend", loopTransition, false);
    theCircle.addEventListener("webkitTransitionEnd", loopTransition, false);
    theCircle.addEventListener("mozTransitionEnd", loopTransition, false);
    theCircle.addEventListener("msTransitionEnd", loopTransition, false);
    theCircle.addEventListener("oTransitionEnd", loopTransition, false);
  }
  setup();

  function setInitialClass(e) {
    theCircle.className = "state-two";
  }

  function loopTransition(e) {
    // alternate b/w classes 
    if (e.propertyName == "opacity") {
        if (theCircle.className == "state-two") {
            theCircle.className = "state-one";
        } else {
            theCircle.className = "state-two";
        }
    }
}


});
