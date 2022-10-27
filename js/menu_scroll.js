

$(function (params) {
    $('nav a').click(function (params) {
        let href = $(this).attr('href');
        let offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop},4000);
    })
})

