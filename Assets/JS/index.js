$(document).ready(function(){
    $('.spot-left__bigimg').slick({
        slidesToShow: 1,
        slitesToScroll: 1,
        arrows: false,
        fade: true,
        asNavfor: '.spot-left__smallimg',    
    });
    $('.spot-left__smallimg').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavfor: '.spot-left__bigimg',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
    });
})