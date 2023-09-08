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

      function addToCart() {
        var quant = $('#quant');
        var price = $('#price').text();
        var priceQuant = parseInt(price);
        var priceEnd = $('#price-end');
        // Pega a quantidade de produtos
        var inputField = $('#spot-right__buy-quantity');
        var currentValue = parseInt(inputField.val());
        var priceCalc = currentValue * priceQuant;
        quant.text(currentValue);
        // Fim pega a quantidade de produtos
        // Calcula o preço final
        priceEnd.text(priceCalc + '.00');
        // Fim calcula o preço final
        $('.header-right__cart-box__empty').removeClass('active');
        $('.header-right__cart-box__full').toggleClass('active');
      };

      function deleteProd() {
        $('#delete').on('click', function(){
          $(this).parent().remove();
          $('.header-right__cart-box__checkout').remove();
          $('.header-right__cart-box__empty').toggleClass('active');
        });
      };

      function createProd() {
        var fullBox = $('.header-right__cart-box__full');
        var boxProd = $('.header-right__cart-box__product');
        
        if(boxProd.length === 0) {
          fullBox.prepend(`
          <div class="header-right__cart-box__product">
            <img class="header-right__cart-box__img" src="./Assets/images/image-product-1-thumbnail.jpg" alt="product1">
            <p>Fall Limited Edition Sneakers $<span id="price">125.00</span> x <span id="quant">1</span> $<span id="price-end">125.00</span></p>
            <img id="delete" onclick="deleteProd()" src="./Assets/images/icon-delete.svg" alt="delete">
          </div> <a class="header-right__cart-box__checkout" href="#">Checkout</a>
          `);

        }
      } 

      $('#buy').on('click', function(){
        createProd();
        addToCart();
        deleteProd();
      });

      $('.header-right__cart-img').on('click', function(){
        $('.header-right__cart-box').toggleClass('active')
      });
      
})