$(window).scroll(function(){
    var sticky = $('.horizontal-section'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 5950) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });