navlinks = document.querySelector('.nav-links');
btn = document.querySelector('.nav_toggle');



btn.addEventListener("click", function() {
    navlinks.classList.toggle(".showlinks");
});


var swiper = new Swiper(".project-swiper", {
    slidesPerView: 1,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
});