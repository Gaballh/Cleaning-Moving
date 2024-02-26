// select landing page Element
// let landingPage = document.querySelector(".landing-page");

// Get Array of Img
// let imgsArray = ["1.jpg","3.jpg"];





// setInterval(() => {
// Get random number
// let randomNumber = Math.floor(Math.random() * imgsArray.length); 
// change backgroung imge url
// landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")';

// },20000);
/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
$('.rating .fa-star').click(function() {
  $('.rating .active-rating').removeClass('active-rating');
  $(this).toggleClass('active-rating');
});