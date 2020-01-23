// filtering

$(document).on("click", ".newest-box__filter-item", function() {
    let type = $(this);
    if (type.hasClass('all-filter')) {
        typeFiltering('.all', '.all-filter');
    } else if (type.hasClass('furnitures-filter')) {
        typeFiltering('.furnitures', '.furnitures-filter');
    } else if (type.hasClass('chairs-filter')) {
        typeFiltering('.chairs', '.chairs-filter');
    } else if (type.hasClass('decor-filter')) {
        typeFiltering('.decor', '.decor-filter');
    } else if (type.hasClass('lighting-filter')) {
        typeFiltering('.lighting', '.lighting-filter');
    }
});


function typeFiltering(type, typeItem) {
    activeNav(typeItem, '.newest-box__filter-item');
    $('.newest-box>.product-box>.product-item').removeClass('hide');
    $('.newest-box>.product-box>.product-item').addClass('hide');
    $(type).removeClass('hide');
}

function activeNav(leverItem, lever) {
    $(lever).removeClass('nav-active');
    $(leverItem).addClass('nav-active');
}

//sorting

// $(document).on("click", ".newest-box__sort-item", function() {
//     let dir = $(this);
//     if (dir.hasClass('price-up')) {
//         activeNav('.price-up', ".newest-box__sort-item");
//         sortProductsPriceUp();
//     } else if (dir.hasClass('price-down')) {
//         activeNav('.price-down', ".newest-box__sort-item");
//         sortProductsPriceDown();
//     }

// });

// function sortProductsPriceUp() {

// }

// function sortProductsPriceDown() {

// }