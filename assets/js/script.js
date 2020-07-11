$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 30,
        nav: true,
        navText: [],
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
        }
    })
});