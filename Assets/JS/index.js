$(document).ready(function(){
    $('.spot-left__bigimgs').slick({
        slidesToShow: 1,
        slitesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        swipeToSlide: false,
        asNavFor: '.spot-left__smallimgs',    
    });
    $('.spot-left__smallimgs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.spot-left__bigimgs',
        arrows: false,
        infinite: true,
        focusOnSelect: true,
    });
})