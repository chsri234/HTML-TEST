$(document).ready(function(){

    $('#carouselExampleControls').carousel();

    $(".demo").owlCarousel({
        autoplay: true,
        loop:true,
        margin:10,
        nav:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $(".demo1").owlCarousel({
        autoplay: true,
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        items: 1
    });
})