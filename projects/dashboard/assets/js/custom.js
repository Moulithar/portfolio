$( document ).ready(function($) {
    $(".test").on("click", function() {
        $(".left-sidebar").toggleClass("active");
        $(".main-content").toggleClass("active");
    })
});