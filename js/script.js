$(document).ready(function() {

    $('#fullpage').fullpage({
        navigation: true,
        autoScrolling: true,
        verticalCentered: false,
        scrollOverflow: true,
        slidesNavigation: true,
        scrollingSpeed: 400
    });

    var swiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        }
    });

    $('#login-form-link').click(function(e) {
        $("#login-form").css('display', 'block');
        $("#register-form").css('display', 'none');
        $("#recover-form").css('display', 'none');
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").css('display', 'block');
        $("#login-form").css('display', 'none');
        $("#recover-form").css('display', 'none');
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('.forgot-password').click(function(e) {
        $("#recover-form").css('display', 'block');
        $("#login-form").css('display', 'none');
        $("#register-form").css('display', 'none');
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});


