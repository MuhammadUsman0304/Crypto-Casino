(function ($) {
    "use strict";


    jQuery(document).ready(function($){

    
        //======================================
        //======== count down ==========
        //======================================
        var nodes = $('.timer');
        $.each(nodes, function (index, value) {
            var date = $(this).data('date');

            setInterval(() => {

                var endTime = new Date(date);
                endTime = (Date.parse(endTime) / 1000);

                var now = new Date();
                now = (Date.parse(now) / 1000);

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400);
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

                $(value).find('.day').html(days);
                $(value).find('.hour').html(hours);
                $(value).find('.minute').html(minutes);
                $(value).find('.second').html(seconds);

            }, 1000);


        })


        //======================================
        //========== Smooth scroll =============
        //======================================
        $('.main-menu .nav-item a').on('click', function (e) {
            
            var anchor = $(this).attr('href');
            var hash = anchor.slice(0,1);

            if ('#' == hash) {
                e.preventDefault();
                var top = $(anchor).offset().top;
                $(this).parent().addClass('active').siblings().removeClass('active');
                $('html, body').animate({
                    scrollTop: $(anchor).offset().top
                }, 1000);
            }

        });


        /**----------------------
         *  Back to top
         * --------------------**/
        $(document).on('click', '.back-to-top button',function(){
            $('html,body').animate({
                scrollTop:0
            },3000);
        });
        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        //======================================
        //======== Testimonial slider ==========
        //======================================

            var testimonialCarousel = $('.banner-slider');
            testimonialCarousel.owlCarousel({
                loop: true,
                dots: false,
                dotData: true,
                nav: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                item: 1,
                autoplay: true,
                autoplayTimeout: 3000,
                smartSpeed: 2000,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });


        
        //======================================
        //======== gallery slider ==========
        //======================================
        $('.dj-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            autoplay: true,
            autoplayTimeout: 1000,
            smartSpeed:3000,
            responsive:{
                0: {
                    items: 1
                },
                414: {
                    items: 1
                },
                575: {
                    items: 2
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        })
        
        /*=======================================
           testimonial carousel
       ========================================*/
        var testimonialCarousel = $('.testimonial-slider');
        testimonialCarousel.owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 30,
            autoplay: true,
            startPosition: 2,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1920: {
                    items: 2
                }
            }
        }); 

        //======================================
        //========== magnificPopup video ============
        //======================================
        $('.venobox').magnificPopup({
            type: 'video'
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });

        $(document).on('click', '.back-to-top button', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 3000);
        });

    });



    //define variable for store last scrolltop
    var lastScrollTop = '';
    
    $(window).on('scroll', function () {

        
       /*--------------------------
        sticky menu activation
       -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.header');
        if ($(window).scrollTop() > 300) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;
       
    });
           


    $(window).on('load', function () {
        //======================================
        //============= Preloader ==============
        //======================================

        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);

    });

    
}(jQuery));	







