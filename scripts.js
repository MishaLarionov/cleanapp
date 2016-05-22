$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.mdl-layout__tab-bar').addClass('fixed');
    } else {
        $('.mdl-layout__tab-bar').removeClass('fixed');
    }
});