var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 5,
  keyboard: {
    enabled: true,
  },

  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
