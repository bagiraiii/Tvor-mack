$(document).ready(function () {
    $("#carousel1").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: false
            },
            767: {
                items: 3,
                nav: true,
                loop: true
            },
            991: {
                items: 5,
                nav: true,
                loop: true
            }
        },
        autoplay: true,
        autoplayTimeout: 5000,
    });
});
