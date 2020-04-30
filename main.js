//slider che permette di scorrere le immagini avanti e dietro

$('.next').click(function() {
    var current_image = $('.active');
    current_image.removeClass('active');
    var next_image = current_image.next('img');
    if (next_image.length != 0) {
        next_image.addClass('active');
    }
    else {
        $('img:first-child').addClass('active')
    }
    var current_bullet = $('.selected');
    current_bullet.removeClass('selected');
    var next_bullet = current_bullet.next('i');
    if (next_bullet.length != 0) {
        next_bullet.addClass('selected');
    }
    else {
        $('i:first-child').addClass('selected')
    }
})

$('.prev').click(function() {
    var current_image = $('.active');
    current_image.removeClass('active');
    var prev_image = current_image.prev('img');
    if (prev_image.length != 0) {
        prev_image.addClass('active');
    }
    else {
        $('img:nth-child(4)').addClass('active')
    }
    var current_bullet = $('.selected');
    current_bullet.removeClass('selected');
    var next_bullet = current_bullet.prev('i');
    if (next_bullet.length != 0) {
        next_bullet.addClass('selected');
    }
    else {
        $('i:nth-child(4)').addClass('selected')
    }
})
