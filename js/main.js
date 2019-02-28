var btnWriteUs = document.querySelector(".info-us__button");
var containerWriteUs = document.querySelector(".write-us");
var btnCloseWriteUs = containerWriteUs.querySelector(".close-popup");
var inputWriteUs = containerWriteUs.querySelectorAll(".input");


var btnMap = document.querySelector(".info-us__map");
var containerMap = document.querySelector(".map-popup");
var btnCloseMap = containerMap.querySelector(".close-popup");

var sliderPromoBtn = document.querySelectorAll(".slider-promo__controls-item");
var sliderPromoContainer = document.querySelectorAll(".slider-promo__item");

var sliderBtn = document.querySelectorAll(".slider-input");
var sliderContainer = document.querySelectorAll(".slider__item");

var overlay = document.querySelector(".overlay");


function toggleSlidePromo() {
  for (var i = 0; i < sliderPromoBtn.length; i++) {
    sliderPromoContainer[i].classList.remove("slider-promo__item--active");
    if (sliderPromoBtn[i].checked == true) {
      sliderPromoContainer[i].classList.add("slider-promo__item--active");
    }
  }
}


function toggleSlide() {
  for (var i = 0; i < sliderBtn.length; i++) {
    sliderContainer[i].classList.remove("slider__item--active");
    if (sliderBtn[i].checked == true) {
      sliderContainer[i].classList.add("slider__item--active");
    }
  }
}


for (var i = 0; i < sliderPromoBtn.length; i++) {
  sliderPromoBtn[i].addEventListener("click", toggleSlidePromo);
}


for (var i = 0; i < sliderBtn.length; i++) {
  sliderBtn[i].addEventListener("click", toggleSlide);
}



btnWriteUs.addEventListener("click", function (evt) { 
  evt.preventDefault();
  openWriteUsModal();
});


btnCloseWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeWriteUsModal();
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    closeWriteUsModal();
  }
});


function openWriteUsModal() {
  containerWriteUs.classList.add("modal--show");
  overlay.classList.add("overlay--active");
  containerWriteUs.querySelector("input").focus();
}


function closeWriteUsModal() {
  containerWriteUs.classList.remove("modal--show");
  overlay.classList.remove("overlay--active");
}


btnMap.addEventListener("click", function (evt) { 
  evt.preventDefault();
  openMapModal();
});


btnCloseMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeMapModal();
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    closeMapModal();
  }
});


function openMapModal() {
  containerMap.classList.add("modal--show");
  overlay.classList.add("overlay--active");
}


function closeMapModal() {
  containerMap.classList.remove("modal--show");
  overlay.classList.remove("overlay--active");
}


overlay.addEventListener("click", function ()  {
  document.querySelector(".modal--show").classList.remove("modal--show");
  overlay.classList.remove("overlay--active");
});

containerWriteUs.querySelector("form").addEventListener("submit", function (evt) {
  evt.preventDefault();
  var valid = true;
  for (var i = 0; i < inputWriteUs.length; i++) {
    inputWriteUs[i].classList.remove("error");
    if (!inputWriteUs[i].value) {
      inputWriteUs[i].offsetWidth = inputWriteUs[i].offsetWidth; 
      inputWriteUs[i].classList.add("error");
      valid = false;
    }
  }
  if (valid) {
    containerWriteUs.querySelector("form").submit();
  }
}); 