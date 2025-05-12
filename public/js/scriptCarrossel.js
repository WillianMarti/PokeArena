const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });