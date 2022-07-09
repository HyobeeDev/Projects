// top_bn

// (function () {
//   const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;

//   let today = new Date(),
//       dd = String(today.getDate()).padStart(2, "0"),
//       mm = String(today.getMonth() + 1).padStart(2, "0"),
//       yyyy = today.getFullYear(),
//       nextYear = yyyy + 1,
//       dayMonth = "09/30/",
//       birthday = dayMonth + yyyy;
  
//   today = mm + "/" + dd + "/" + yyyy;
//   if (today > birthday) {
//     birthday = dayMonth + nextYear;
//   }
//   //end
  
//   const countDown = new Date(birthday).getTime(),
//       x = setInterval(function() {    

//         const now = new Date().getTime(),
//               distance = countDown - now;

//         document.getElementById("days").innerText = Math.floor(distance / (day)),
//           document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//           document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//           document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
//     }, 0)
// }());




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
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: '.review .swiper-button-prev',
    nextEl: '.review .swiper-button-next'
  }
})