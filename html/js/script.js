$(document).ready(function(){
    // Главный экран
    function setHomeMainHeight(href) {
        $('.home-main').css('height', $(href).outerHeight());
    }
    setHomeMainHeight($('.home-main-nav .active a').attr('href'));
    $('.home-main-nav a').on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        setHomeMainHeight(href);
        $('.home-main-nav li').removeClass('active');
        $(this).parent().addClass('active');
        $('.home-main-block').removeClass('show');
        $(href).addClass('show');
    })

    // Слайдер клиентов
    $('.client-slider').slick({
        arrows: false,
        slidesToShow: 6,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000
    })
})