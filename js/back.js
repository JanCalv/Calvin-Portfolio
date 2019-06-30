var $toTop = $('div.a');
$(window).scroll(function() {

    clearTimeout($.data(this, 'waitASecond'));
    $toTop.stop();

    $.data(this, 'waitASecond', setTimeout(function() {

     
        if ($(window).scrollTop() > 100) {
          $toTop.fadeIn();
        } else if ($toTop.is(':visible')) {
          $toTop.fadeOut();
        }

    }, 10));

});