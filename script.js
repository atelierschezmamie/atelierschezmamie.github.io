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
