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
        autoplaySpeed: 2000
    })

    // Команда
    $('.team-nav a').on('click', function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        $('.team-nav li').removeClass('active');
        $(this).parent().addClass('active');
        $('.team-block').removeClass('animate__backInRight show');
        $(href).addClass('animate__backInRight show');
    })

    function setMaxTeamHeight() {
        var max = 0;
        var flag = false;
        $('.team-block').each(function(){
            if($(this).hasClass('show')) {
                flag = true;
            } else {
                $(this).addClass('show');
            }
            if(max < $(this).outerHeight()) {
                max = $(this).outerHeight();
            }
            if(!flag) {
                $(this).removeClass('show');
            }
            flag = false;
        })
        if(max > $('.team-nav').outerHeight()) {
            $('.team-container').css('height', max);
        }
    }
    setMaxTeamHeight();
})