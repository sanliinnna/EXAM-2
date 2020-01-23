$('.trending-box>.product-box>.product-item:gt(1)').hide();

if ($('.trending-box>.product-box>.product-item').length < 2) {
    $('.trending-box>.product-box>.product-item:gt(1)').show();
}

$('.trending-box>.more').on('click', function() {
    $('.trending-box>.product-box>.product-item:gt(1)').toggle();
    $(this).text() === '+ See more products' ? $(this).text('+ See less products') : $(this).text('+ See more products');
})