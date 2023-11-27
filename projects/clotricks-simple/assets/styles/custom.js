$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 20) {
      //clearHeader, not clearheader - caps H
      $(".header").addClass("header-bg");
    } else {
      $(".header").removeClass("header-bg");
    }
  });
});
