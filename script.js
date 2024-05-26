const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_img img", {
    ...scrollRevealOption,
    origin: "right",
    delay: 200,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay: 1000,
});


ScrollReveal().reveal(".about_img img", {
    ...scrollRevealOption,
    origin: "left",
    delay: 200,
});
ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about_content .section_description", {
    ...scrollRevealOption,
    delay: 1000,
});


const swiper = new Swiper(".swiper", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});