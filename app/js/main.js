$(function(){
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