$(document).ready(function () {
  // do stuff when DOM is ready
  console.log("ready");

  $("#c").on("click", clickHandler);
  $("#d").on("click", clickHandlerD);
  $("#a").on("click", clickHandlerE);

  function clickHandler() {
    console.log($(this));
    //use the css "action" (attribute + value)
    // remember the "this?"
    $(this).css("background-color", "purple");
  } // clickHandler

  function clickHandlerD() {
    // use jQuery action hide() -> to hide
    $("#e").hide();
    // use jQuery action show() -> to show
    $("#f").show();
  }

  //toggle the blue and purple squares
  function clickHandlerE() {
    // use jQuery action to show/hide
    $("#g").toggle();
  }

  $(".box").on("mouseover", pHandler);

  function pHandler() {
    console.log($(this));
    //acces any p tags.
    // let pars = $("p");
    let pars = $("#pId");
    for (let i = 0; i < pars.length; i++) {
      //Note: html = actual markup, text = just text
      //  console.log("Found paragraph: " + $(pars[i]).html());
      console.log("Found paragraph: " + $(pars[i]).text());
    }
  }

  $("#clickable").on("mouseup", paraAtts);
  function paraAtts() {
    //let pAtts = $("#clickable span").attr("title");

    //ALL chidren
    // let pChildren = $(this).children();

    //children that are span elements
    let pChildren = $(this).children("span");
    console.log(pChildren);

    for (let i = 0; i < pChildren.length; i++) {
      let pAtts = $(pChildren[i]).attr("title");
      console.log(i + "::" + pChildren[i]);
      console.log(pAtts);
    }
  }

  $("#clickable").on("mouseover", paraAttsOver);

  function paraAttsOver() {
    //let pAtts = $("#clickable span").attr("title");
    let pChildren = $(this).children("span");
    for (let i = 0; i < pChildren.length; i++) {
      $(pChildren[i]).attr("title", i + " new title");
    }
  }

  //1:: REPLACE the html of the given element
  $("#c").on("click", function () {
    $("#pId").html("<h2> The Second Paragraph is now in an h2 tag </h2>");
  });

  /*2:: REPLACE the text content of the given element with the html content of the other
        //EXAMPLE shows access and replace*/
  $("#d").on("click", function () {
    $("#clickable").text($("#pId").html());
  });
});
