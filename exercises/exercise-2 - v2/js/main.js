$(document).ready(function () {
  let transtate = "state-two";
  let scaleVal = 1;
  let speed = 0.01;
  let circleScale = 1;
  let opacityVal = 0.5;

  window.requestAnimationFrame(loop); //callback to loop the animation 

  // animate the pulsating circle.
  function loop() {
    if (scaleVal < 0.5 || scaleVal > circleScale) {
      speed *= -1;
    }
    if (scaleVal <= 0.6) {
      opacityVal = 0.1;
    } 
    else if (scaleVal > 0.6 && scaleVal < 1) {
      opacityVal = 0.5;
    } 
    else {
      opacityVal = 1;
    }

    document.getElementById("pulse").style.transform = `scale(${scaleVal})`;
    document.getElementById("pulse").style.opacity = opacityVal;
    scaleVal += speed;
    window.requestAnimationFrame(loop);
  }

  $("#choose-day").submit((e) => {
    e.preventDefault(); //prevents the form from returning to its initial state after the page reloads from triggering the submit btn.

    // transition to different pulse states based on the day of the week.
    let dayValue = $("#week-day").val();
    if (dayValue === "Friday") {
      document.getElementById("pulse").style.backgroundColor = '#ff0000'; //changecolor
      transtate = "state-two"; 
      circleScale = 0.8;
      speed = 0.08;
      if (scaleVal > 0.8) {
        scaleVal = 0.8; //so that the scale doesn't conflict with the next/ previous day.
      }
      if (scaleVal < 0.5) {
        scaleVal = 0.5;
      }
    }
    if (dayValue === "Saturday") {
      document.getElementById("pulse").style.backgroundColor = '#2693ff';
      transtate = "state-three";
      circleScale = 1.5;
      speed = 0.02;
      if (scaleVal > 1.5) {
        scaleVal = 1.5;
      }
      if (scaleVal < 0.5) {
        scaleVal = 0.5;
      }
    }
    if (dayValue === "Sunday") {
      document.getElementById("pulse").style.backgroundColor = '#2693ff';
      transtate = "state-four";
      circleScale = 1.1;
      speed = 0.02;
      if (scaleVal > 1.1) {
        scaleVal = 1.1;
      }
      if (scaleVal < 0.5) {
        scaleVal = 0.5;
      }
    }
    if (dayValue === "Monday") {
      document.getElementById("pulse").style.backgroundColor = '#ff0000';
      transtate = "state-five";
      circleScale = 1;
      speed = 0.05;
      if (scaleVal > 1) {
        scaleVal = 1;
      }
      if (scaleVal < 0.5) {
        scaleVal = 0.5;
      }
    }

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
});
