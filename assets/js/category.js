$(document).ready(function () {
    jcf.replaceAll();
    $('#responsiveTabs').responsiveTabs({
        startCollapsed: 'tabs',
    });

    $('.form-action').on('click', function () {
        $('.form-column').toggleClass('active')
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            $(this).text('Скрыть фильтры')
        } else {
            $(this).text('Показать фильтры')
        }
    })

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    $('.holder-item').on('click', function(){
        $(this).toggleClass('active');
    });

})