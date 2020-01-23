let headerOffset = $('.header').offset(),
    scroll = $(document).scrollTop();
const header = $('.header');


$(document).scroll(function() {
    if ($(document).scrollTop() >= header.height()) header.addClass('fixed');
    else if (headerOffset) header.removeClass('fixed');
})

// || $(document).scrollTop() >= header.innerHeight()