$(document).ready(function() {
    $(".fade").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        dots: false,
        arrows: true,
        draggable: true,
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

$(".slider-box__arrow-item_left").click(function() {
    $(".fade").slick("slickPrev");
});

$(".slider-box__arrow-item_right").click(function() {
    $(".fade").slick("slickNext");
});