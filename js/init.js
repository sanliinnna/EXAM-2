function initMobile() {
    console.log("is-mobile");

}

function initTablet() {
    console.log("is-tablet");
}

function initDesktop() {
    $('.dark-overlay').removeClass('visible');
    $('.header__menu').removeClass('visible');
    $('.header__menu-button').removeClass('active');
    $('body').removeClass('stop-scrolling');
    $('.has-submenu').find('ul').show();
    $('.header__facilities-item_search>div').removeClass('visible');
    $('.header__facilities-item_search>div>input').val('');
    console.log("is-desktop");
}
ssm.addState({
    id: 'mobile',
    query: '(max-width: 767px)',
    onEnter: function() {
        initMobile();
    }
});

// queries

ssm.addState({
    id: 'tablet',
    query: '(max-width: 991px)',
    onEnter: function() {
        initDesktop();
        initTablet();

    }
});

ssm.addState({
    id: 'desktop',
    query: '(min-width: 992px)',
    onEnter: function() {
        initDesktop();
    }

});