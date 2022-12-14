/* PLEASE DO NOT CHANGE THIS FRAMEWORK ....
the get requests are all implemented and working ... so there is no need to alter ANY of the existing code: rather you just ADD your own ... */

$(document).ready(function () {
  //create once :)
  let description = document.getElementById("Ex4_title");
  //array to hold the dataPoints
  let dataPoints = [];

  /**** GeT THE DATA initially :: default view *******/
  /*** no need to change this one  **/
  $.get("./runQueries.php", { "select-query": "onload" }, function (response) {
    console.log(response);
    let parsedJSON = JSON.parse(response);
    //console.log(parsedJSON);
    displayAsDefault(parsedJSON);
  });

  /***** Get the data from drop down selection ****/
  let querySelectDropDown = document.getElementById("queryChoice");

  querySelectDropDown.onchange = function () {
    console.log(this.value);
    let copyVal = this.value;
    //will make a get request for the data ...

    /**************************MODIFY********************/
    $.get("./runQueries.php", { "select-query": copyVal }, function (response) {
      let parsedJSON = JSON.parse(response);
      $("#childOne").empty();
      description.textContent = "";
      document.getElementById("parent-wrapper").style.background =
        "rgba(51,102,255,.2)";
      switch (copyVal) {
        case "default": {
          displayAsDefault(parsedJSON);
          break;
        }
        case "one": {
          //sabine done
          displayInCirclularPattern(parsedJSON);
          break;
        }
        case "two": {
          //sabine done
          displayByGroups(parsedJSON, "weather", "eventName");
          break;
        }
        /***** TO DO FOR EXERCISE 4 *************************
         ** 1: once you have implemented the sqlite query in runQueries.php,
         ** you will receive it from the get request (here and will enter into the correct selct case
         **  - based on the value that the user chose from the drop down list...)
         ** call a custom display function FOR EACH query that you construct ... i.e.
         ** 4 queries - I want 4 UNIQUE display functions - you can use the ones I created
         ** as inspiration ONLY - DO NOT just copy and change colors ... experiment, explore, change ...
         ** you can create your own custom objects - but NO images, video or sound... (will get 0).
         ** bonus: if your visualizations(s) are interactive or animate.
         ****/
        case "three": {
          // TODO
          displayByPositiveAfterMood(parsedJSON);
          break;
        }
        case "four": {
          // TODO
          displayByEventName(parsedJSON);
          break;
        }

        case "five": {
          // TODO
          displayByMondayOrTuesday(parsedJSON);
          break;
        }
        case "six": {
          // TODO
          displayByStartMoodAfterMood(parsedJSON);
          break;
        }
        default: {
          console.log("default case");
          break;
        }
      } //switch

      //FOR DEBUGGING
      console.log(parsedJSON);
      console.log(parsedJSON.length);
    });
    /***********************************************/
  };

  /*****************DISPLAY AS DEFAULT GRID :: AT ONLOAD ******************************/
  function displayAsDefault(resultSet) {
    //reset
    dataPoints = [];
    let xPos = 0;
    let yPos = 0;
    const NUM_COLS = 50;
    const CELL_SIZE = 20;
    let coloredDays = {};
    /*
  1: get the array of days (last element in the result set  -- see runQueries.php)
  2: for each possible day (7)  - create a key value pair -> day: color and put in the
  coloredDays object
  */
    let possibleDays = resultSet[resultSet.length - 1];
    let possibleColors = [
      "rgb(255, 102, 153)",
      "rgb(255, 77, 136)",
      "rgb(255, 51, 119)",
      "rgb(255, 26, 102)",
      "rgb(255, 0, 85)",
      "rgb(255, 0, 85)",
      "rgb(255, 0, 85)",
    ];

    for (let i = 0; i < possibleDays.length; i++) {
      coloredDays[possibleDays[i]] = possibleColors[i];
    }
    /* for through each result  / not last as last is the days array and:
1: create a new MyDataPoint object and pass the properties from the db result entry to the object constructor
2: set the color using the coloredDays object associated with the resultSet[i].day
3:  put into the dataPoints array.
**/
    //set background of parent ... for fun ..
    document.getElementById("parent-wrapper").style.background =
      "rgba(255,0,0,.4)";
    description.textContent = "DEfAULT CASE";
    description.style.color = "rgb(255, 0, 85)";

    //last  element is the helper array...
    for (let i = 0; i < resultSet.length - 1; i++) {
      dataPoints.push(
        new myDataPoint(
          resultSet[i].dataId,
          resultSet[i].day,
          resultSet[i].weather,
          resultSet[i].start_mood,
          resultSet[i].after_mood,
          resultSet[i].after_mood_strength,
          resultSet[i].event_affect_strength,
          resultSet[i].eID,
          //map to the day ...
          coloredDays[resultSet[i].day],
          //last parameter is where should this go...
          document.getElementById("childOne"),
          //which css style///
          "point"
        )
      );
      /** this code is rather brittle - but does the job for now .. draw a grid of data points ..
//*** drawing a grid ****/
      if (i % NUM_COLS === 0) {
        //reset x and inc y (go to next row)
        xPos = 0;
        yPos += CELL_SIZE;
      } else {
        //just move along in the column
        xPos += CELL_SIZE;
      }
      //update the position of the data point...
      dataPoints[i].update(xPos, yPos);
    } //for
    document.getElementById("childOne").style.height = `${yPos + CELL_SIZE}px`;
  } //function

  /*****************DISPLAY IN CIRCUlAR PATTERN:: <ONE>******************************/
  function displayInCirclularPattern(resultSet) {
    //reset
    dataPoints = [];
    let xPos = 0;
    let yPos = 0;
    //for circle drawing
    let angle = 0;
    let centerX = 400;
    let centerY = 350;

    let scalar = 250;
    let yHeight = Math.cos(angle) * scalar + centerY;

    let coloredMoods = {};

    let possibleMoods = resultSet[resultSet.length - 1];
    let possibleColors = [
      "rgba(0, 64, 255,.5)",
      "rgba(26, 83, 255,.5)",
      "rgba(51, 102, 255,.7)",
      "rgba(51, 102, 255,.4)",
      "rgba(77, 121,255,.6)",
      "rgba(102, 140, 255,.6)",
      "rgba(128, 159, 255,.4)",
      "rgba(153, 179, 255,.3)",
      "rgba(179, 198, 255,.6)",
      "rgba(204, 217, 255,.4)",
    ];

    for (let i = 0; i < possibleMoods.length; i++) {
      coloredMoods[possibleMoods[i]] = possibleColors[i];
    }

    //set background of parent ... for fun ..
    document.getElementById("parent-wrapper").style.background =
      "rgba(0, 26, 102,1)";
    description.textContent = "BY AFTER MOOD";
    description.style.color = "rgba(0, 64, 255,.5)";

    for (let i = 0; i < resultSet.length - 1; i++) {
      dataPoints.push(
        new myDataPoint(
          resultSet[i].dataId,
          resultSet[i].day,
          resultSet[i].weather,
          resultSet[i].start_mood,
          resultSet[i].after_mood,
          resultSet[i].after_mood_strength,
          resultSet[i].event_affect_strength,
          resultSet[i].eID,
          //map to the day ...
          coloredMoods[resultSet[i].after_mood],
          //last parameter is where should this go...
          document.getElementById("childOne"),
          //which css style///
          "point_two"
        )
      );
      /*** circle drawing ***/
      xPos = Math.sin(angle) * scalar + centerX;
      yPos = Math.cos(angle) * scalar + centerY;
      angle += 0.13;

      if (angle > 2 * Math.PI) {
        angle = 0;
        scalar -= 20;
      }
      dataPoints[i].update(xPos, yPos);
    } //for

    document.getElementById("childOne").style.height = `${yHeight}px`;
  } //function

  /*******************DISPLAY AS GROUP****************************/

  function displayByGroups(resultSet, propOne, propTwo) {
    dataPoints = [];
    let finalHeight = 0;
    //order by WEATHER and Have the event names as the color  ....

    //set background of parent ... for fun ..
    document.getElementById("parent-wrapper").style.background =
      "rgba(51, 153, 102,1)";
    description.textContent = "BY WEATHER AND ALSO HAVE EVENT NAMES {COLOR}";
    description.style.color = "rgb(179, 230, 204)";

    let coloredEvents = {};

    //reget
    let possibleEvents = resultSet[resultSet.length - 1];
    let possibleColors = [
      "rgb(198, 236, 217)",
      "rgb(179, 230, 204)",
      "rgb(159, 223, 190)",
      "rgb(140, 217, 177)",
      "rgb(121, 210, 164)",
      "rgb(102, 204, 151)",
      "rgb(83, 198, 138)",
      "rgb(64, 191, 125)",
      "rgb(255, 204, 179)",
      "rgb(255, 170, 128)",
      "rgb(255, 153, 102)",
      "rgb(255, 136, 77)",
      "rgb(255, 119, 51)",
      "rgb(255, 102, 26)",
      "rgb(255, 85, 0)",
      "rgb(230, 77, 0)",
      "rgb(204, 68, 0)",
    ];

    for (let i = 0; i < possibleColors.length; i++) {
      coloredEvents[possibleEvents[i]] = possibleColors[i];
    }

    let offsetX = -200;
    let offsetY = 150;
    // find the weather of the first one ...
    let currentGroup = resultSet[0][propOne];
    let xPos = offsetX;
    let yPos = offsetY;

    for (let i = 0; i < resultSet.length - 1; i++) {
      dataPoints.push(
        new myDataPoint(
          resultSet[i].dataId,
          resultSet[i].day,
          resultSet[i].weather,
          resultSet[i].start_mood,
          resultSet[i].after_mood,
          resultSet[i].after_mood_strength,
          resultSet[i].event_affect_strength,
          resultSet[i].eID,
          //map to the EVENT ...
          coloredEvents[resultSet[i].eventName],
          //last parameter is where should this go...
          document.getElementById("childOne"),
          //which css style///
          "point_two"
        )
      );
      /** check if we have changed group ***/
      if (resultSet[i][propOne] !== currentGroup) {
        //update
        currentGroup = resultSet[i][propOne];
        offsetX += 150;
        offsetY = 150;
        xPos = offsetX;
        yPos = offsetY;
      }
      //if not just keep on....
      else {
        if (i % 10 === 0) {
          xPos = offsetX;
          yPos = yPos + 15;
        } else {
          xPos = xPos + 15;
        }
      } //end outer else

      dataPoints[i].update(xPos, yPos);
      finalHeight = yPos;
    } //for

    document.getElementById("childOne").style.height = `${finalHeight + 20}px`;
  } //function

  /***************** QUERY THREE ******************************/
  function displayByPositiveAfterMood(resultSet, propOne) {
    //set background of parent
    document.getElementById("parent-wrapper").style.background =
      "rgba(238, 129, 129,1)";
    description.textContent = "BY POSITIVE AFTER MOOD";
    description.style.color = "rgb(43, 79, 68)";
    // document.getElementsByTagName("footer")[0].innerHTML = "something";

    dataPoints = [];
    //for grid drawing
    const NUM_COLS = 40;
    const CELL_SIZE = 20;
    let xPos = 0;
    let yPos = 0;
    let coloredEvents = {};

    let possibleEvents = resultSet[resultSet.length - 1];
    let possibleColors = [
      "rgb(255, 102, 153)",
      "rgb(255, 77, 136)",
      "rgb(255, 51, 119)",
      "rgb(255, 26, 102)",
      "rgb(255, 0, 85)",
      "rgb(255, 0, 85)",
      "rgb(255, 0, 85)",
    ];

    for (let i = 0; i < possibleEvents.length; i++) {
      coloredEvents[possibleEvents[i]] = possibleColors[i];
    }

    for (let i = 0; i < resultSet.length - 1; i++) {
      dataPoints.push(
        new myDataPoint(
          resultSet[i].dataId,
          resultSet[i].day,
          resultSet[i].weather,
          resultSet[i].start_mood,
          resultSet[i].after_mood,
          resultSet[i].after_mood_strength,
          resultSet[i].event_affect_strength,
          resultSet[i].eID,
          //map to the event ...
          coloredEvents[resultSet[i].eID],
          //last parameter is where should this go...
          document.getElementById("childOne"),
          //which css style///
          "point_five"
        )
      );

      //*** drawing a grid ****/
      if (i % NUM_COLS === 0) {
        //reset x and inc y (go to next row)
        xPos = 0;
        yPos += CELL_SIZE;
      } else {
        //just move along in the column
        xPos += CELL_SIZE;
      }
      //update the position of the data point...
      dataPoints[i].update(xPos, yPos);
    } //for
    document.getElementById("childOne").style.height = `${yPos + CELL_SIZE}px`;
  } //FUNCTION

  /******************* QUERY FOUR ****************************/

  function displayByEventName(resultSet) {
    document.getElementById("parent-wrapper").style.background =
      "rgba(198, 216, 211)";
    description.textContent = "BY EVENT NAME";
    description.style.color = "rgb(216, 30, 91)";

    let weather = [
      "stormy",
      "raining",
      "sunny",
      "cloudy",
      "clear",
      "snowing",
      "grey",
      "fog",
    ];
    let eventName = [
      "walking in a forest",
      "swimming in the ocean",
      "dining with sibling",
      "taking a nap with a cat",
      "watching rain fall though the window",
      "reading a comic",
      "baking a chocolate cake",
      "rollerskating",
      "planting roses",
      "chomping on carrots",
      "whistling in the wind",
      "walking through a dark tunnel",
      "sunbathing in the desert",
      "visitng a parent for an afternoon",
      "learning a new programming language",
      "running up stairs",
    ];
    dataPoints = [];
    let xPos = 0;
    let yPos = 0;
    const NUM_COLS = 40;
    const CELL_SIZE = 20;
    let colorByEventName = [];
    for (let i = 0; i < eventName.length; i++) {
      let red = (58 / eventName.length) * i;
      let alpha = (1 / eventName.length) * i;
      let colorString = `rgba(${red}, 51, 53, ${alpha})`;
      colorByEventName.push(colorString);
    }

    for (let i = 0; i < resultSet.length; i++) {
      for (let j = 0; j < weather.length; j++) {
        for (let k = 0; k < eventName.length; k++) {
          if (
            resultSet[i].weather == weather[j] &&
            resultSet[i].eventName == eventName[k]
          ) {
            dataPoints.push(
              new myDataPoint(
                resultSet[i].dataId,
                resultSet[i].day,
                resultSet[i].weather,
                resultSet[i].start_mood,
                resultSet[i].after_mood,
                resultSet[i].after_mood_strength,
                resultSet[i].event_affect_strength,
                resultSet[i].eID,
                //map to the day ...
                colorByEventName[k],
                // 'rgb(0, 0, 0)',
                //last parameter is where should this go...
                document.getElementById(`childOne`),
                //which css style///
                `point${j}`
              )
            );
            if (i % NUM_COLS === 0) {
              //reset x and inc y (go to next row)
              xPos = 0;
              yPos += CELL_SIZE;
            } else {
              //just move along in the column
              xPos += CELL_SIZE;
            }
            //update the position of the data point...
            dataPoints[i].update(xPos, yPos);
            // console.log("data points: " + dataPoints[i]);
          }
        }
      }
    }
    document.getElementById("childOne").style.height = `${yPos + CELL_SIZE}px`;
  } //function

  /******************* QUERY FIVE ****************************/
  function displayByMondayOrTuesday(resultSet) {
    document.getElementById("parent-wrapper").style.background =
      "rgba(51, 92, 103)";
    description.textContent = "BY EVENT AFFECT STRENGTH";
    description.style.color = "rgb(255, 240, 243)";

    dataPoints = [];
    let xPos = 0;
    let yPos = 0;
    const NUM_COLS = 40;
    const CELL_SIZE = 20;
    colorByEventAffectStrength = [
      "rgb(89, 13, 34)",
      "rgb(128, 15, 47)",
      "rgb(164, 19, 60)",
      "rgb(201, 24, 74)",
      "rgb(255, 77, 109)",
      "rgb(255, 117, 143)",
      "rgb(255, 143, 163)",
      "rgb(255, 179, 193)",
      "rgb(255, 204, 213)",
      "rgb(255, 240, 243)",
    ];

    for (let i = 0; i < resultSet.length; i++) {
      for (let j = 0; j < 10; j++) {
        if (resultSet[i].event_affect_strength == j + 1) {
          dataPoints.push(
            new myDataPoint(
              resultSet[i].dataId,
              resultSet[i].day,
              resultSet[i].weather,
              resultSet[i].start_mood,
              resultSet[i].after_mood,
              resultSet[i].after_mood_strength,
              resultSet[i].event_affect_strength,
              resultSet[i].eID,
              //map to the day ...
              colorByEventAffectStrength[j],
              //last parameter is where should this go...
              document.getElementById("childOne"),
              //which css style///
              "point_three"
            )
          );
          if (i % NUM_COLS === 0) {
            //reset x and inc y (go to next row)
            xPos = 0;
            yPos += CELL_SIZE;
          } else {
            //just move along in the column
            xPos += CELL_SIZE;
          }
          //update the position of the data point...
          dataPoints[i].update(xPos, yPos);
          // console.log("data points: " + dataPoints[i]);
        }
      }
    }
    document.getElementById("childOne").style.height = `${yPos + CELL_SIZE}px`;
  } //function

  /*******************  QUERY SIX  ****************************/
  function displayByStartMoodAfterMood(resultSet) {
    //set background of parent ... for fun ..
    document.getElementById("parent-wrapper").style.background =
      "rgb(176,137,104)";
    description.textContent = "BY WEATHER";
    description.style.color = "rgb(0, 0, 0)";

    //reset
    let xPos = 0;
    let yPos = 0;
    dataPoints = [];
    const NUM_COLS = 25;
    const CELL_SIZE = 25;

    let event_weather_colours = [
      "rgb(255,0,0)",
      "rgb(0, 255, 0)",
      "rgb(0, 0, 255)",
      "rgb(255, 0, 0)",
      "rgb(0, 255, 0)",
      "rgb(0, 0, 255)",
      "rgb(255, 0, 0)",
      "rgb(0, 255, 0)",
      "rgb(0, 0, 255)",
      "rgb(255, 0, 0)",
    ];

    //last  element is the helper array...
    for (let i = 0; i < resultSet.length; i++) {
      for (let j = 0; j < 10; j++) {
        // 10 event affect strength
        if (resultSet[i].event_affect_strength == j + 1) {
          dataPoints.push(
            new myDataPoint(
              resultSet[i].dataId,
              resultSet[i].day,
              resultSet[i].weather,
              resultSet[i].start_mood,
              resultSet[i].after_mood,
              resultSet[i].after_mood_strength,
              resultSet[i].event_affect_strength,
              resultSet[i].eID,
              //map to after_mood...
              event_weather_colours[j],
              //last parameter is where should this go...
              document.getElementById("childOne"),
              //which css style///
              "pointRGB" // Increments point class (point0, point1, etc...)
            )
          );

          //*** drawing a grid ****/
          if (i % NUM_COLS === 0) {
            //reset x and inc y (go to next row)
            xPos = 0;
            yPos += CELL_SIZE;
          } else {
            //just move along in the column
            xPos += CELL_SIZE;
          }
          //update the position of the data point...
          dataPoints[i].update(xPos, yPos);
        }
      }
    }
    document.getElementById("childOne").style.height = `${yPos + CELL_SIZE}px`;
  } //function
});
