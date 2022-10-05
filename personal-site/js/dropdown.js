$(document).ready(function(){
    $("#button").on("mouseover", function(){
        // console.log("hover");
        $("#dropdown-container").show();
    })
    $("#button").on("mouseout", function(){
        // console.log("hover");
        $("#dropdown-container").hide();
    })

    $("#dropdown-container").on("mouseover", function(){
        console.log("hover");
        $("#dropdown-container").show();
    })
    $("#dropdown-container").on("mouseout", function(){
        console.log("out");
        $("#dropdown-container").hide();
    })

    $("#similar-project").on("mouseover", function(){
        // console.log("hover");
        $("#sub-dropdown-container").show();
    })
    $("#similar-project").on("mouseout", function(){
        // console.log("hover");
        $("#sub-dropdown-container").hide();
    })

    $("#sub-dropdown-container").on("mouseover", function(){
        // console.log("hover");
        $("#sub-dropdown-container").show();
    })
    $("#sub-dropdown-container").on("mouseout", function(){
        // console.log("hover");
        $("#sub-dropdown-container").hide();
    })
});