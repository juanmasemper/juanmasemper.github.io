document.addEventListener("DOMContentLoaded", function() {
    var mySwiper = new Swiper(".mySwiper", {
        // Configuración del slider
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000, // milisegundos
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
