$( document ).ready(function($) {
    $(".test").on("click", function() {
        $(".left-sidebar").toggleClass("active");
        $(".main-content").toggleClass("active");
    })

//search bar//
    $(".btn").on("click",function(){
        $(".input").toggleClass("inclicked");
        $(".btn").toggleClass("close");
      })
//owl carousel//
    

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
        }
    })

});