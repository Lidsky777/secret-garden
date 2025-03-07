document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".start-slideshow");
    const slideshowContainer = document.querySelector(".slideshow-container");
    const slides = document.querySelectorAll(".slide-item"); // Выбираем .slide-item
    const audio = document.getElementById("background-music");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none"; // Показываем или скрываем весь блок
        });
    }

    function startSlideshow() {
        slideshowContainer.classList.remove("hidden");
        audio.play();
        showSlide(currentIndex);
        setInterval(nextSlide, 10000);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    startBtn.addEventListener("click", startSlideshow);
});