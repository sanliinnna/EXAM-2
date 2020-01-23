// menu opening/closing

$(document).on('click', '.header__menu-button', function(e) {
    e.preventDefault();
    $('.header__menu-button').toggleClass('active');
    $('.dark-overlay').toggleClass('visible');
    $('.header__menu').toggleClass('visible');
    $('.has-submenu').removeClass('opened').find('ul').hide();
    if ($('body').hasClass('stop-scrolling')) $('body').removeClass('stop-scrolling');
    else $('body').addClass('stop-scrolling')
});

$(document).on('click', '.dark-overlay', function(e) {
    e.preventDefault();
    $('.header__menu-button').removeClass('active');
    $('.dark-overlay').removeClass('visible');
    $('.header__menu').removeClass('visible');
    $('.has-submenu').removeClass('opened').find('ul').hide();
    if ($('body').hasClass('stop-scrolling')) $('body').removeClass('stop-scrolling');
    else $('body').addClass('stop-scrolling')
});

// submenu opening

$(document).on('click', '.is-submenu', function(e) {
    e.preventDefault();
    const $this = $(this)
    $this.next('ul').slideToggle(function() {
        const $this = $(this);
        if ($this.is(':hidden')) {
            $this.find('ul').hide()
                .parent('.has-submenu')
                .removeClass('opened');
        }
    })
});

// init funcs