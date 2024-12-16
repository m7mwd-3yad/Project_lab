var typed = new Typed("#element", {
    strings: ["Where Fashion Meets Comfort Shop Now.", " "],
    typeSpeed: 170,
    loop: true,
})
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    });
});