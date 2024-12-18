document.addEventListener("DOMContentLoaded", () => {
    const slidesContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Автоматическая смена слайда каждые 5 секунд
    const interval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 20000);

    next.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    prev.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    showSlide(currentIndex);
});
