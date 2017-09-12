
$(function() {
  $(".nav-icon").click(function() {
    $(".main-nav").toggleClass("open");
    $(".icon-bar:nth-child(1)").toggleClass("close-nav-icon-1");
    $(".icon-bar:nth-child(2)").toggleClass("close-nav-icon-2");
    $(".icon-bar:nth-child(3)").toggleClass("close-nav-icon-3");
  });


  $( window ).scroll(function() {

    var wPos = $(window).scrollTop();

    var aPos = $("#about").offset().top - 125;
    var sPos = $("#skills").offset().top -50;
    var pPos = $("#projects").offset().top + 100;
    var cPos = $("#contact").offset().top - 200;

    console.log("About: "+aPos+ "Skills: "+sPos+ "Projects: "+pPos+"Contact: "+ cPos);
    console.log(wPos);

    if (wPos <= aPos) {
      $("#page-indicator h2").css("top", 0 + "px");
    }
    if (wPos >= aPos) {
      $("#page-indicator h2").css("top", -65 + "px");
      /*$("#page-indicator h2").addClass("shadow");

      setTimeout(function() {
        $("#page-indicator h2").removeClass("shadow");
      }, 200);
      */
    }
    if (wPos >= sPos) {
      $("#page-indicator h2").css("top", -130 + "px");
    }
    if (wPos >= pPos) {
      $("#page-indicator h2").css("top", -195 + "px");
    }

    if (wPos >= cPos) {
      $("#page-indicator h2").css("top", -260 + "px");
    }



  });
});
