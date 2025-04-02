document.addEventListener("DOMContentLoaded", function () {
    // Gestion du menu hamburger
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", function () {
            menu.classList.toggle("show");

            if (hamburger.textContent === "☰") {
                hamburger.textContent = "✖";
            } else {
                hamburger.textContent = "☰";
            }
        });
    } else {
        console.error("Éléments .hamburger ou .menu introuvables dans le DOM.");
    }

    // Gestion des carrousels
    document.querySelectorAll(".carousel").forEach(carousel => {
        let slides = carousel.querySelectorAll(".fleurs-slide, .repassage-slide");
        let currentSlide = 0;
        let totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        }

        carousel.querySelector(".next").addEventListener("click", function () {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        });

        carousel.querySelector(".prev").addEventListener("click", function () {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        });

        showSlide(currentSlide);
    });
});
