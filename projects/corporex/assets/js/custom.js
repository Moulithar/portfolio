
$( document ).ready(function($){
    
//owl carousel//
    
    $('.mainowl').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        dots:true,
        centre:true,

        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
        });

        $('.testimonial-slider').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            autoplay:false,
            dots:true,
            responsive:{
            0:{
                items:1
            },
            }
        });
        
       
 });


 