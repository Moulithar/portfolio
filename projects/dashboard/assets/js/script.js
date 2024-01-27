$(document).ready(function ($) {
  $(document).on("click", ".movebutton", function () {
    $(".main-content").toggleClass("active");
    $(".leftcolumn").toggleClass("active");
  });
});
