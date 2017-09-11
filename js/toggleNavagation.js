
$(function() {
  $("#nav-icon").click(function() {
    $(".main-nav").toggleClass("open");
  });


  $( window ).scroll(function() {

    var wPos = $(window).scrollTop();

    var aPos = $("#about").offset().top - 125;
    var sPos = $("#skills").offset().top -50;
    var pPos = $("#projects").offset().top - 100;
    var cPost = $("#contact").offset().top;

    console.log("About: "+aPos+ "Skills: "+sPos+ "Projects: "+pPos);
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



  });
});
