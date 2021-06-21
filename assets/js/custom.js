new WOW().init();
$(document).ready(function() {

    //sticky top
    $(window).scroll(function() {
        var stickyTop = $('.navbar').height();
        if ($(this).scrollTop() > stickyTop) {
            $(".navbar").addClass("sticky-header");
        } else {
            $(".navbar").removeClass("sticky-header");
        }
    });

    //client testimonial
    $(".client-testimonial").slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        pauseOnFocus: false,
    });

    // toggle menu js 
    $(".navbar-toggler").click(function() {
        $(this).toggleClass("on");
        $("body").toggleClass("main");
    });

    // number count for stats, using jQuery animate
    $('.counting').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });

    //read more js
    $('.readmore').click(function(event) {
        var article_num = event.target.dataset.article;

        // window.testEvent = event;
        // Show the additional content
        $(`.${article_num} .show-this-on-click`).slideDown();

        // Toggle the controls
        $(`.${article_num} .readmore`).hide();
        $(`.${article_num} .readless`).show();

        event.preventDefault();
    });

    $('.readless').click(function(event) {
        var article_num = event.target.dataset.article;

        // Hide the additional content
        $(`.${article_num} .show-this-on-click`).slideUp();

        // Toggle the controls
        $(`.${article_num} .readless`).hide();
        $(`.${article_num} .readmore`).show();

        event.preventDefault();
    });

    // contact form js
    $(".form-control").each(function() {
        if ($(this).val() !== '') {
            $(this).parents(".field-group").addClass("focus");
        }
    });

    $(".form-control").focusin(function() {
        $(this).parents(".field-group").addClass("focus");
    });
    $(".form-control").focusout(function() {
        console.log($(this).val());
        if ($(this).val() == '' || $(this).val() == ' ') {
            $(this).parents(".field-group").removeClass("focus");
        }
    });

});