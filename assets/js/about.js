$(document).ready(function () {
    //Slick
    $('.slider-content').slick({
        dots: false,
    })

    //end

    // кнопка ютуб

    $(".youtube-overlay").click(function () {
        $(".youtube-video").removeClass("active");
        $(".youtube-video iframe").attr('src', '')
        var a = $(this).parent('.youtube-video').attr("data-youtube");
        $(this).parent('.youtube-video').addClass("active");
        $(this).parent('.youtube-video').find("iframe").attr('src', a).addClass("active");
    })

    //end
})