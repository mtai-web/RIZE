const hamburger = document.querySelector(".hamburger");
const header_nav = document.querySelector(".header_nav");

hamburger.addEventListener("click", () => {
    header_nav.classList.toggle("active");
    hamburger.querySelector(".hamburger_menu").style.display = header_nav.classList.contains("active") ? "none" : "block";
    hamburger.querySelector(".hamburger_close").style.display = header_nav.classList.contains("active") ? "block" : "none";
});

const headerLinks = document.querySelectorAll(".header_nav a");
headerLinks.forEach(link => {
    link.addEventListener("click", () => {
        header_nav.classList.remove("active");
        hamburger.querySelector(".hamburger_menu").style.display = "block";
        hamburger.querySelector(".hamburger_close").style.display = "none";
    });
});