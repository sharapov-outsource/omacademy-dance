(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    // Dance Class carousel
    $(".class-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    // Dance Training carousel
    $(".training-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });

    const $callbackButton = $('#callback-button');
    const $callbackForm = $('#callback-form');

    $callbackButton.on('click', function () {
        $callbackForm.toggle();
    });


    const backToTop = $('.back-to-top');
    const callUs = $('.callback-widget');
    
   // Back to top button
    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        const scrollableHeight = $(document).height() - 100;

        // Show or hide the button based on scroll position
        if (scrollTop > 500) {
            backToTop.fadeIn('slow');
        } else {
            backToTop.fadeOut('slow');
        }

        // Change bottom position of the button based on whether the user has scrolled to the bottom
        if (scrollTop + $(window).height() >= scrollableHeight) {
            backToTop.css('bottom', '100px');
            callUs.css('bottom', '100px');
        } else {
            backToTop.css('bottom', '30px');
            callUs.css('bottom', '30px');
        }
    });

    backToTop.click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);

