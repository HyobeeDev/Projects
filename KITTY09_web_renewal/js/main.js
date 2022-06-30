// top_bn


// main_visual_swiper
new Swiper('.main_visual_outer .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 92,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000
  },
  pagination: {
    el: '.main_visual_outer .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.main_visual_outer .swiper-button-prev',
    nextEl: '.main_visual_outer .swiper-button-next'
  }
})

// sale_swiper
new Swiper('.sale .swiper', {
  slidesPerView: '4',
  spaceBetween: 20,
  loop: true,
  navigation: {
    prevEl: '.sale .swiper-button-prev',
    nextEl: '.sale .swiper-button-next'
  }
})