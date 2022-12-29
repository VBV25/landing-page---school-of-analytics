$(document).ready(function() {
    /*----------------прелоадер----------------*/
    $(window).on('load', function() {
        let timerId = setInterval(function() {
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

        $('#wrap_preloader').delay(300).fadeToggle(2000);

        setTimeout(function() {
            clearInterval(timerId);
            console.log('preloader setinterval stop');
        }, 5000);
    });
});