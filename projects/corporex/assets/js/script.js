$( document ).ready(function($) {
    $(".movebutton").on("click", function() {
        $(".leftcolumn").toggleClass("active");
        $(".main-content").toggleClass("active");
    })
});