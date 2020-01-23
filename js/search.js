$(document).on('click', '.header__facilities-item_search>img', function(e) {
    e.preventDefault();
    $('.header__facilities-button').addClass('visible');
    $('.header__facilities-item_search>div').addClass('visible');
    $('.light-overlay').addClass('visible');
    $('body').addClass('stop-scrolling');
});

$(document).on('click', '.header__facilities-button', function(e) {
    e.preventDefault();
    $('.header__facilities-item_search>div').removeClass('visible');
    // $('.light-overlay').removeClass('visible');
    $('body').removeClass('stop-scrolling');
    $('.header__facilities-item_search>div>input').val('');

})


$(document).on('click', '.light-overlay', function(e) {
    e.preventDefault();
    $('.header__facilities-item_search>div').removeClass('visible');
    // $('.light-overlay').removeClass('visible');
    $('body').removeClass('stop-scrolling');
    $('.header__facilities-item_search>div>input').val('');

})