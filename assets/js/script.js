$(document).ready(function () {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    $('#feedbacksCarousel').owlCarousel({
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

    $('#certificatesCarousel').owlCarousel({
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
                items: 3
            },
        }
    })

    $('.phone-mask').each(function () {
        IMask(
            this, {
            mask: '+{375}(00)000-00-00'
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#upButton').fadeIn();
        } else {
            $('#upButton').fadeOut();
        }
    });
    $('#upButton').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});