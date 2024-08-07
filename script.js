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

ScrollReveal().reveal('.reveal-left', {
    ...scrollRevealOption,
    origin: "left",
    delay: 200,
});

ScrollReveal().reveal('.reveal-right', {
    ...scrollRevealOption,
    origin: "right",
    delay: 400,
});



var MagazineSlider = new Swiper('.swiper1', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverFlowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});



var swiper = new Swiper(".swiper2", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },
    navigation: {
        nextEl: '.next-elem',
        prevEl: '.prev-elem'
    },
    // autoplay: {
    //     delay: 4000,
    //     pauseOnMouseEnter: true,
    //     disableOnInteraction: false,
    // },
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        enabled: true,
        forceToAxis: true,
        sensitivity: 0.1,
    }
});