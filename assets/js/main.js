document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {

    //Меню
    var headerHeight = $('header').outerHeight();

    $('.open-menu').on('click', function () {
        $('.menu-mobile').toggleClass('active');
        var headerHeight = $('header').outerHeight();
        $('.popup-catalog').css('top', '10px' + headerHeight);
    });

    $('.menu-mobile a').on('click', function () {
        $('.menu-mobile').removeClass('active');
        var headerHeight = $('header').outerHeight();
        $('.popup-catalog').css('top', '10px' + headerHeight);
    });

    $('.show-catalog').on('click', function () {
        $('.popup-catalog').toggleClass('active')
        $('.popup-mounting').removeClass('active')
        $('.popup-order').removeClass('active')
        $('body').removeClass('hiden')
        if ($(window).width() < 768) {
            $('.popup-catalog').css('top', '10px' + headerHeight);
            $('body').toggleClass('hiden')
        } else {
            $('.popup-catalog').css('top', '0px');
        }
    })

    $('.show-mounting').on('click', function () {
        $('.popup-mounting').toggleClass('active')
        $('.popup-catalog').removeClass('active')
        $('.popup-order').removeClass('active')
        $('body').removeClass('hiden')
        if ($(window).width() < 768) {
            $('.popup-mounting').css('top', '10px' + headerHeight);
            $('body').toggleClass('hiden')
        } else {
            $('.popup-mounting').css('top', '0px');
        }
    })

    $('.show-order').on('click', function () {
        $('.popup-order').toggleClass('active')
        $('.popup-catalog').removeClass('active')
        $('.popup-mounting').removeClass('active')
        $('body').removeClass('hiden')
        if ($(window).width() < 768) {
            $('.popup-order').css('top', '10px' + headerHeight);
            $('body').toggleClass('hiden')
        } else {
            $('.popup-order').css('top', '0px');
        }
    })




    //Попапы
    jQuery(function (a) {
            a(document).mouseup(function (b) {
                var c = a(".modall-body");
                c.is(b.target) || 0 !== c.has(b.target).length || (c.removeClass("active-modall"),
                    a(".modall").removeClass("active-modall"),
                    a(".body").removeClass("showing-modal"))
            })
        }),

        $('.close, .not').on('click', function () {
            $(".modall").removeClass('active-modall');
            $('.body').removeClass('showing-modal');
            $('.popup-catalog').removeClass('active');
            $('.popup-order').removeClass('active');
            $('.popup-mounting').removeClass('active')
        });

    $('.delete').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-delete").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });



    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $(function () {
        $(window).scroll(function () {

            if ($(this).scrollTop() != 0 && $(this).scrollTop() > 100) {
                $('.go-top').fadeIn();
            } else {
                $('.go-top').fadeOut();
            }
        });

        $('.go-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 700);
        });
    });
});

$(window).resize(function () {
    var headerHeight = $('header').outerHeight();
    $('.popup-catalog').css('top', '10px' + headerHeight);

    if ($(window).width() >= 768) {
        $('.popup-catalog').css('top', '0px');
    } else {
        $('.popup-catalog').css('top', '10px' + headerHeight);
    }


})