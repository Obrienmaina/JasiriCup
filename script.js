
  let currentSlide = 0;
  const slides = document.querySelectorAll(".banner-slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
  }

setInterval(() => changeSlide(1), 24000);

