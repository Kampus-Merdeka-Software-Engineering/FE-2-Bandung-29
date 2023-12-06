let currentIndex = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const carouselWidth = document.querySelector('.carousel-item').offsetWidth;
  const newPosition = -index * carouselWidth;
  carousel.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-item').length) % document.querySelectorAll('.carousel-item').length;
  showSlide(currentIndex);
}