$(document).ready(function () {
    jcf.replaceAll();
    $(".phone_mask").mask("+7 (000) 000 00 00", {
        placeholder: ""
    })
    $('.file-add').on('click', function () {
        $(".file").addClass('active');
        $('.jcf-real-element').trigger("click").addClass('active');;
    });
})