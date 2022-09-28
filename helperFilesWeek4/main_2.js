$(document).ready(function() {
    $("#e").on("click",function()
     {
        let mTop = parseInt($(this).css('top'));
        $(this).animate({'top':mTop+20+"px"},2000);
        console.log("ani complete?")
        console.log($(this).css('top'))
   
     });
   
   
   });