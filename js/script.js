let wishCount = 0;
let cartCount = 0;

$(document).on('click', '.product-item__wishlist', function(e) {
    e.preventDefault();
    const $this = $(this);
    if ($this.hasClass('active')) {
        $this.removeClass('active');
        wishCount--;

    } else {
        $this.addClass('active');
        wishCount++;
    }
    if (wishCount > 0) {
        $('.wish-box').addClass('visible');
        $('.wish-box').text(wishCount);

    } else $('.wish-box').removeClass('visible');

    // console.log(wishCount);
})

$(document).on('click', '.product-item__button', function(e) {
    e.preventDefault();
    const $this = $(this);
    if ($this.hasClass('active')) {
        $this.removeClass('active');
        cartCount--;
        setTimeout(function() {
            $this.text('+ Add to cart');
        }, 1000);
        $this.text(' Removed from cart');

    } else {
        $this.addClass('active');
        cartCount++;
        setTimeout(function() {
            $this.text('- Remove from cart');
        }, 1000);
        $this.text(' Added to cart');
    }
    if (cartCount > 0) {
        $('.cart-box').addClass('visible');
        $('.cart-box').text(cartCount);

    } else $('.cart-box').removeClass('visible');

    // console.log(cartCount);
})