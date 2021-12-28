$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 30,
        autoplayTimeout: 2500,
        nav: true,
        dots: false,
        loop: true,
        navText: ['<i class="fas fa-long-arrow-alt-left arrowleft bg-primary text-light text-center py-2 rounded-pill"></i>', '<i class="fas fa-long-arrow-alt-right arrowright bg-primary text-light text-center py-2 rounded-pill"></i>'],
        responsive: {
            0: {
                items: 1,
                dots: false,
                autoplay: true
            },
            1000: {
                items: 2,
                autoplay: true
            }
        }

    });
});