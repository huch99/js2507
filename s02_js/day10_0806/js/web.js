$('.menu').click(function(e) {
    e.preventDefault();
    $(this).children().slideToggle();
    $(this).toggleClass('tdActive');
    
});

$('.imgList').click(function(e) {
    e.preventDefault();
    var targetBg = $('.img');
    var source = $(this).children().attr('src');


    targetBg.css({
        'background': `url(.${source}) no-repeat`,
        'background-size' : 'contain',
        'background-position' : 'center'
    });

});

$('#imp').click(function() {
    $('#important').toggleClass('displayBlock');
    $('#write').removeClass('displayBlock');
});

$('#wri').click(function() {
    $('#write').toggleClass('displayBlock');
    $('#important').removeClass('displayBlock');

});



