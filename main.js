$('document').ready(function() {

    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
        if (this.scrollY > 350) {
            $('.scroll-up-btn').addClass("show")
        } else {
            $('.scroll-up-btn').removeClass("show")
        }
    });

    var typed = new Typed('.typing', {
        strings: ['Youtuber', 'web developer',
            'web designer', 'Freelencer',
        ],
        smartBackspace: true,
        typeSpeed: 100,
        backspeed: 80,
        loop: true // Default value
    });
    var typed = new Typed('.typing-2', {
        strings: ['Youtuber', 'web developer',
            'web designer', 'Freelencer',
        ],
        smartBackspace: true,
        typeSpeed: 100,
        backspeed: 80,
        loop: true // Default value
    });



    //show up

    $('.scroll-up-btn').click(function() {
            $('html').animate({ scrollTop: 0 })
        })
        //toggle btn


    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
    //typing speed


    //TEAM SECTION
    $('.carousel').owlCarousel({
        loop: true,
        autoPlay: true,
        autoPlayTimeout: 9000,
        autoPlayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            }
        },

    });
})
