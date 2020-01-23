$(document).ready(function() {
    $(".fade").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        dots: false,
        arrows: false,
        draggable: true,
        // pauseOnHover: true,
        // mobileFirst: true,
        // swipe: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true
            }
        }]
    });
});

$(".left").click(function() {
    $(".fade").slick("slickPrev");
});

$(".right").click(function() {
    $(".fade").slick("slickNext");
});