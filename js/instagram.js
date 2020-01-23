$("[data-fancybox]").fancybox({


    protect: true
});

$(".instagram-box__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});