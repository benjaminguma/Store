export const fade = {
  effect: 'fade',
  grabCursor: true,
  centeredSlides: true,
  speed: 800,
  slidesPerView: 1,
  longSwipes: true,
  followFinger: true,
  loop: true,
  touchEventsTarget: 'wrappar',
  allowTouchMove: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
};

export const multiple = no => ({
  grabCursor: true,
  slidesPerView: no,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
