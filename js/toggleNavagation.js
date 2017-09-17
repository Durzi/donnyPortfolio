
$(function() {

  //Toggle Navigation and animate menu icon
  $(".nav-icon").click(function() {
    $(".main-nav").toggleClass("open");
    $(".icon-bar:nth-child(1)").toggleClass("close-nav-icon-1");
    $(".icon-bar:nth-child(2)").toggleClass("close-nav-icon-2");
    $(".icon-bar:nth-child(3)").toggleClass("close-nav-icon-3");
  });

  //Animates page-indicator to display correct section
  $( window ).scroll(function() {
    var wPos = $(window).scrollTop();
    var bIntro = $("#intro").position().top + $("#intro").outerHeight(true) - 100;
    var bAbout = $("#about").position().top + $("#about").outerHeight(true) -100;
    var bSkills = $("#skills").position().top + $("#skills").outerHeight(true) -150;
    var bProjects = $("#projects").position().top + $("#projects").outerHeight(true) -120;

    if (wPos <= bIntro) {
      $("#page-indicator h1").css("top", 0 + "px");
    }
    if (wPos >= bIntro) {
      $("#page-indicator h1").css("top", -65 + "px");
    }
    if (wPos >= bAbout) {
      $("#page-indicator h1").css("top", -130 + "px");
    }
    if (wPos >= bSkills) {
      $("#page-indicator h1").css("top", -195 + "px");
    }
    if (wPos >= bProjects) {
      $("#page-indicator h1").css("top", -260 + "px");
    }
  });


  //Hide email
  $("#hide-email").hover(function(){
    var nHref = $(this).attr("href").replace("stopthespam@madeup", "dmckercher@gmail");
    $(this).attr("href", nHref);
  });

  //Smooth scrolling
  $(".main-nav-ul li a").click(function() {
    var section = $(this).attr("href");
    var where = $(section).position().top;

    $("html, body").animate({
      scrollTop: where
    }, 700);

  });

});//EoB
