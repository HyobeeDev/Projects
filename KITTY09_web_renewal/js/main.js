// top_bn
const topBnClose = document.querySelector('.top_bn_close')
const topBn = document.querySelector('.top_bn_outer')

topBnClose.addEventListener('click', () => {
  topBn.style.height = '0'
})



// section scroll up
const hotdealScrollUp = document.querySelector('.hotdeal_scroll_up')
const saleScrollUp = document.querySelector('.sale_scroll_up')
const recommendScrollUp = document.querySelector('.rocommend_scroll_up')
const bestScrollUp = document.querySelector('.best_scroll_up')
const shopScrollUp = document.querySelector('.shop_scroll_up')
const reviewScrollUp = document.querySelector('.review_scroll_up')
const campaignScrollUp = document.querySelector('.campaign_scroll_up')
const infoScrollUp = document.querySelector('.info_scroll_up')

window.addEventListener('scroll', () => {
  if(window.scrollY > 200){
    gsap.to(hotdealScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(hotdealScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // hotdealScrollUp

window.addEventListener('scroll', () => {
  if(window.scrollY > 1100){
    gsap.to(saleScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(saleScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // saleScrollUp

window.addEventListener('scroll', () => {
  if(window.scrollY > 1900){
    gsap.to(recommendScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(recommendScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // recommendScrollUp

window.addEventListener('scroll', () => {
  if(window.scrollY > 2800){
    gsap.to(bestScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(bestScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // bestScrollUp

window.addEventListener('scroll', () => {
  if(window.scrollY > 3700){
    gsap.to(shopScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(shopScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // shopScrollUp

window.addEventListener('scroll', () => {
  if(window.scrollY > 4000){
    gsap.to(reviewScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(reviewScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // reviewScrollUp

window.addEventListener('scroll', () => {
  if(window.scrollY > 4800){
    gsap.to(campaignScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(campaignScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // campaignScrollUp

window.addEventListener('scroll', () => {
  if(window.scrollY > 5750){
    gsap.to(infoScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(infoScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // infoScrollUp



/*
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    }, 0)
}());
*/



// header_swiper
new Swiper('.header .swiper', {
  direction: 'vertical',
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000
  }
})

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
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: '.sale .swiper-button-prev',
    nextEl: '.sale .swiper-button-next'
  }
})

// shop_banner
new Swiper('.shop_banner .swiper', {
  slidesPerView: '1',
  loop: true,
  autoplay: {
    delay: 3000
  },
  navigation: {
    prevEl: '.shop_banner .swiper-button-prev',
    nextEl: '.shop_banner .swiper-button-next'
  }
})

// review_swiper
new Swiper('.review .swiper', {
  slidesPerView: '4',
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".review .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: '.review .swiper-button-prev',
    nextEl: '.review .swiper-button-next'
  }
})

// quick_menu
new Swiper('.quick_menu .swiper', {
  // slidesPerView: '4',
  // spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".quick_menu .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: '.quick_menu .swiper-button-prev',
    nextEl: '.quick_menu .swiper-button-next'
  }
})



// best_category
const feedLabel = document.querySelector('.feed_category')
const sneckLabel = document.querySelector('.sneck_category')
const etcLabel = document.querySelector('.etc_category')
const feedItems = document.querySelector('.feed_items')
const sneckItems = document.querySelector('.sneck_items')
const etcItems = document.querySelector('.etc_items')

feedLabel.addEventListener('mouseover', () => {
  feedItems.style.opacity = '1'
  sneckItems.style.opacity = '0'
  etcItems.style.opacity = '0'
})
sneckLabel.addEventListener('mouseover', () => {
  feedItems.style.opacity = '0'
  sneckItems.style.opacity = '1'
  etcItems.style.opacity = '0'
})
etcLabel.addEventListener('mouseover', () => {
  feedItems.style.opacity = '0'
  sneckItems.style.opacity = '0'
  etcItems.style.opacity = '1'
})



// quick_contents
const quickContents = document.querySelector('.quick_contents')

window.addEventListener('scroll', () => {
  if(window.scrollY > 600){
    gsap.to(quickContents, 0.3, {
      opacity: 1,
      right: 70
    })
  } else {
    gsap.to(quickContents, 0.3, {
      opacity: 0,
      right: -100
    })
  }
})

// scroll to top btn
const topBtn = document.querySelector('.top_btn')
const rootElement = document.documentElement

topBtn.addEventListener('click', () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})