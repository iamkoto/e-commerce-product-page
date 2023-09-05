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
    $('.spot-right__buy-plus').on('click', function(){
        var inputField = $('#spot-right__buy-quantity');
        var currentValue = parseInt(inputField.val());
          
        if (currentValue < 15) {
            currentValue = currentValue + 1;
            inputField.val(currentValue);
        } else {
            alert('Compra máxima de 15 produtos')
        }
      });
      $('.spot-right__buy-minus').on('click', function(){
        var inputField = $('#spot-right__buy-quantity');
        var currentValue = parseInt(inputField.val());
          
        if (currentValue > 1) {
            currentValue = currentValue - 1;
            inputField.val(currentValue);
        }
      });
      $('.header-right').on('click', function(){
        $('.header-right__cart-box').addClass('.active')
      });
})