'use strict';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: true,
    speed: 300,
    allowTouchMove: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },
  
  });