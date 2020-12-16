$(function(){
  // range-slider
  $(".filter-price__input").ionRangeSlider({
    skin: "square",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }  
  });
  
  $('.advise-product__item-star').rateYo({
    starWidth: "12px",
    ratedFill: "#ffcc00",
    normalFill: "#A0A0A0",
    spacing: "7px",
    readOnly: true,
    halfStar: true
  });

  $('.product-card__info-star').rateYo({
    starWidth: "19px",
    ratedFill: "#ffcc00",
    normalFill: "#A0A0A0",
    spacing: "7px",
    readOnly: true,
    halfStar: true
  });

  $('.slider__wrapper').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500
  });


  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.related-slider__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/right-arrow.svg" alt="arrow right"></button>'
  });
  

  $('.product-card__info-input').styler();

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  var mixerProducts = mixitup('.products__inner', {
    selectors: {
      control: '.products__filter-btn'
    }
  });
  var mixerDesign = mixitup('.design__wrapper', {
    selectors: {
      control: '.design__filter-btn'
    }
  });



});