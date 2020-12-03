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

  $('.slider__wrapper').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500
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