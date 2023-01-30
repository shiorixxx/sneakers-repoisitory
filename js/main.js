"use strict";
//hamburger menu
const ham = document.querySelector("#js-hambuger");
const nav = document.querySelector("#js-nav");
const mask = document.querySelector(".mask");

ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
  mask.classList.toggle("active");
});

//Slick.js
$(".pickup-items").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  swipe: true,
  swipeToSlide: true,
  arrows: false, // ←Previous Next削除
  adaptiveHeight: true, //スライドの高さの自動調整が行われます。
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slideToScroll: 1,
        centerPadding: "60px",
      },
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        centerPadding: "60px",
        slideToScroll: 1,
      },
    },
  ],
});
