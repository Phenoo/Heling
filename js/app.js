const navlinks = document.querySelector('.nav-links');
const btn = document.querySelector('.nav_toggle');


btn.addEventListener("click", ClickBtn)

function ClickBtn() {
    navlinks.classList.toggle('showlinks');
    btn.classList.toggle('rotate');
};

var swiper = new Swiper(".project-swiper", {
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
});