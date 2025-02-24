// Untuk slider pertama
let currentIndex = 0;
const slides = document.querySelectorAll(".first-slider .slide");
const totalSlides = slides.length;

function updateSlide() {
  const slider = document.querySelector(".first-slider .slider");
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Untuk slider kedua
let currentIndexSecond = 0;
const slidesSecond = document.querySelectorAll(".second-slider .slide");
const totalSlidesSecond = slidesSecond.length;

function updateSlideSecond() {
  const sliderSecond = document.querySelector(".second-slider .slider");
  sliderSecond.style.transform = `translateX(-${currentIndexSecond * 100}%)`;
}

function nextSlideSecond() {
  currentIndexSecond = (currentIndexSecond + 1) % totalSlidesSecond;
  updateSlideSecond();
}

function prevSlideSecond() {
  currentIndexSecond =
    (currentIndexSecond - 1 + totalSlidesSecond) % totalSlidesSecond;
  updateSlideSecond();
}

// Auto slide every 3 seconds for the second slider
setInterval(nextSlideSecond, 3000);

function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  const hamburger = document.querySelector(".hamburger");

  navMenu.classList.toggle("show");
  hamburger.classList.toggle("open");
}
