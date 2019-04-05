// MOBILE MENU.
$(document).ready(
    function () {
        var menuToggle = $('#js-mobile-menu').unbind();
        $('#js-navigation-menu').removeClass("show");

        menuToggle.on(
            'click', function (e) {
                e.preventDefault();
                $('#js-navigation-menu').slideToggle(
                    function () {
                        if ($('#js-navigation-menu').is(':hidden')) {
                            $('#js-navigation-menu').removeAttr('style');
                        }
                    });
            });
    });

// SMOOTH SCROLLING ON HOME PAGE.
// See https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(document).ready(
    function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

$(document).ready( function() {
    var typed3 = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 60,
      backSpeed: 40,
      startDelay: 500,
      loop: true
    });
});

// Functions for blog posts.
$(document).ready(
    function () {

        // Expandable comment section.
        $('#js-expander-trigger').click(function () {
            enableCommentForm('#js-expander-trigger');
        });


        $('#comment-count').click(function () {
            enableCommentForm('#comment-count');
        });

        // Give article headings direct links to anchors.
        // Thanks to felicianotech at https://github.com/circleci/circleci-docs.
        $("article h2, article h3, article h4, article h5, article h6").filter("[id]").each(function () {
            $(this).append('<a class="heading-link" href="#' + $(this).attr("id") + '"><i class="fa fa-link"></i></a>');
        });

    });


//jQuery is required to run this code
$( document ).ready(function() {
    $('#customer-logo-scroll').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 8000,
        variableWidth:true,
        arrows: false,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                autoplaySpeed: 1000,
                speed: 1000,
                slidesToScroll: 1
              }
            }
          ]
    });
});

