document.addEventListener("DOMContentLoaded", function () {
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
});
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".fleurs-slide");
    let currentSlide = 0;
    let totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    document.querySelector(".next").addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });
    
    showSlide(currentSlide);
});
