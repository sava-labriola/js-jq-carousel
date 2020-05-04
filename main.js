//slider che permette di scorrere le immagini avanti e dietro.
//scorrimentoautomatico e pausa con dei pulsanti.

$('.next').click(function() {
    var current_image = $('.active');
    current_image.removeClass('active');
    var next_image = current_image.next('img');
    var current_bullet = $('.selected');
    current_bullet.removeClass('selected');
    var next_bullet = current_bullet.next('i');
    if (next_image.length != 0) {
        next_image.addClass('active');
        next_bullet.addClass('selected');
    }
    else {
        $('img:first-child').addClass('active');
        $('i:first-child').addClass('selected');
    }
})

$('.prev').click(function() {
    var current_image = $('.active');
    current_image.removeClass('active');
    var prev_image = current_image.prev('img');
    var current_bullet = $('.selected');
    current_bullet.removeClass('selected');
    var next_bullet = current_bullet.prev('i');
    if (prev_image.length != 0) {
        prev_image.addClass('active');
        next_bullet.addClass('selected');
    }
    else {
        $('img:nth-child(4)').addClass('active');
        $('i:nth-child(4)').addClass('selected');
    }
})
var clock;
$('.start').click(function () {
    clock = setInterval(automatic_slider, 3000);
    function automatic_slider(){
        var current_image = $('.active');
        current_image.removeClass('active');
        var next_image = current_image.next('img');
        var current_bullet = $('.selected');
        current_bullet.removeClass('selected');
        var next_bullet = current_bullet.next('i');
        if (next_image.length != 0) {
            next_image.addClass('active');
            next_bullet.addClass('selected');
        }
        else {
            $('img:first-child').addClass('active');
            $('i:first-child').addClass('selected');
        }
    }
})

$('.pause').click(function () {
    clearInterval(clock);
})
