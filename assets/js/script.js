$(document).ready(function () {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        // margin: 30,
        nav: true,
        navText: [],
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
        }
    })

    $('.phone-mask').each(function () {
        IMask(
            this, {
            mask: '+{375}(00)000-00-00'
        });
    });


});