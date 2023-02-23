$(document).ready(function() {
    /*----------------прелоадер----------------*/
    //$(window).on('load', function()
    //бегущие точки
    const timerId = setInterval(function() {
        setTimeout(function() {
            $('.t4').css({ opacity: '1' });
            $('.t1').css({ opacity: '0' });
        }, 70);
        setTimeout(function() {
            $('.t1').css({ opacity: '1' });
            $('.t2').css({ opacity: '0' });
        }, 140);
        setTimeout(function() {
            $('.t2').css({ opacity: '1' });
            $('.t3').css({ opacity: '0' });
        }, 210);
        setTimeout(function() {
            $('.t3').css({ opacity: '1' });
            $('.t4').css({ opacity: '0' });
        }, 280);
    }, 285);
    //скрытие прелоадера
    if ($(window).on('load')) {
        setTimeout(function() {
            // $('#wrap_preloader').delay(2000).fadeToggle(300);
            clearInterval(timerId);
            $('#wrap_preloader').delay(2000).addClass('no-activ-prelod');
            console.log('preloader setinterval stop');
        }, 2000);
    }
    /*else {
                   setTimeout(function() {
                       clearInterval(timerId);
                       $('#wrap_preloader').delay(2000).css('display', 'none');
                       console.log('preloader setinterval stop');
                   }, 5000);
               }*/
});