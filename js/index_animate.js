/*бегущая строка*/

$(function() {
    var marquee = $('.slide_job_examples');
    marquee.css({ overflow: 'hidden', width: '100%' });
    // оболочка для текста ввиде span
    marquee.wrapInner('<span>');
    marquee.find('span').css({ width: '50%', display: 'flex' });
    //
    marquee.wrapInner('<div>');
    marquee.find('div').css('width', '200%');
    var reset = function() {
        $(this).css('margin-left', '0%');
        if ($(window).width() >= 1520) {
            console.log('1');
            $(this).animate({ 'margin-left': '-195%' }, 9000, 'linear', reset);
        } else if ($(window).width() >= 1380) {
            console.log('2');
            $(this).animate({ 'margin-left': '-225%' }, 9000, 'linear', reset);
        } else if ($(window).width() >= 1260) {
            console.log('3');
            $(this).animate({ 'margin-left': '-255%' }, 9000, 'linear', reset);
        } else if ($(window).width() >= 1160) {
            console.log('4');
            $(this).animate({ 'margin-left': '-285%' }, 9000, 'linear', reset);
        } else if ($(window).width() >= 1060) {
            console.log('5');
            $(this).animate({ 'margin-left': '-315%' }, 9000, 'linear', reset);
        } else if ($(window).width() >= 960) {
            console.log('6');
            $(this).animate({ 'margin-left': '-345%' }, 9000, 'linear', reset);
        } else if ($(window).width() >= 860) {
            console.log('7');
            $(this).animate({ 'margin-left': '-375%' }, 9000, 'linear', reset);
        } else if ($(window).width() >= 760) {
            console.log('8');
            $(this).animate({ 'margin-left': '-405%' }, 9000, 'linear', reset);
        } else if ($(window).width() >= 660) {
            console.log('9');
            $(this).animate({ 'margin-left': '-435%' }, 9000, 'linear', reset);
        }

        //
        else if ($(window).width() >= 0) {
            console.log('mobile');
            $(this).animate({ 'margin-left': '-335%' }, 9000, 'linear', reset);
        }
    };

    //
    reset.call(marquee.find('div'));
});

//
//
//
//
//
//
//
//
//

$(document).ready(function() {
    /*скролл страницы вверх*/
    //hide #back-top farst (скрыть #назад-верхний фарст)
    $('#back-top').fadeOut();
    //fade in#back-top (исчезает в#back-top)
    if ($(window).width() >= 1000) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 800) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        //scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1200);
            return false;
        });
    }
    //
    else if ($(window).width() >= 660) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        //scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1200);
            return false;
        });
    }
    //
    else if ($(window).width() >= 0) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        //scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1200);
            return false;
        });
    }
    //
    //
    //
    //
    //присвоение кнопке бургер класса активации
    $('.burger_btn_wrapper').click(function() {
        $('.burger_btn_wrapper').toggleClass('burger_btn_wrapper_active');
        $('.burger_btn_wrapper').toggleClass('burger_btn_wrapper_not_active');
        $('.nav_block_header_open').toggleClass('active_block');
        $('.nav_block_header_open').toggleClass('no_active_block');
    });

    //
    //
    //
    //
    //
    //

    //----------------------------------------
    //---------открытие и закрытие popup------
    //----------------------------------------

    //---открываем
    //запись
    $('.btn_header_form').click(function() {
        $('.pop_up_question_wrapper').css({ display: 'flex' });

        //заголовок
        $('.subscribe_h3').html(
            'Запишись на курс<br>или задай вопрос<br>на консультации'
        );
        //кнопка

        $('#btn_popup_subscribe_order').html('Записаться на курс');
    });

    $('#btn_1_section_note').click(function() {
        $('.pop_up_question_wrapper').css({ display: 'flex' });

        //заголовок
        $('.subscribe_h3').html(
            'Запишись на курс<br>или задай вопрос<br>на консультации'
        );
        //кнопка
        $('#btn_popup_subscribe_order').html('Записаться на курс');
    });

    //вопрос
    $('.footer_questions_btn').click(function() {
        $('.pop_up_question_wrapper').css({ display: 'flex' });

        //заголовок

        $('.subscribe_h3').html('Задай вопрос<br>на консультации');
        //кнопка
        $('#btn_popup_subscribe_order').html('Задать вопрос');
    });

    //---закрываем
    $('#popup_question_btn_close').click(function() {
        $('.pop_up_question_wrapper').css({ display: 'none' });
    });

    $(document).on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('.pop_up_question_wrapper').css({ display: 'none' });
            $('.btn_blue').css({ borderColor: 'red' });
        }
    });

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    //-----НАЧАТЬ БЕСПЛАТНО-------настройка кнопок формы отправки и отображение необходимых инпутов-----
    $('.call_back_btn_open_form').click(function() {
        $('.tg_btn_open_form').removeClass('form_free_btn_active');
        $('.wa_btn_open_form').removeClass('form_free_btn_active');
        //
        $(this).addClass('form_free_btn_active');
        //
        $('#form_free_name').attr('placeholder', 'Имя*');
    });
    $('.tg_btn_open_form').click(function() {
        $('.call_back_btn_open_form').removeClass('form_free_btn_active');
        $('.wa_btn_open_form').removeClass('form_free_btn_active');
        //
        $(this).addClass('form_free_btn_active');
        //
        $('#form_free_name').attr('placeholder', 'Никнейм*');
    });
    $('.wa_btn_open_form').click(function() {
        $('.call_back_btn_open_form').removeClass('form_free_btn_active');
        $('.tg_btn_open_form').removeClass('form_free_btn_active');
        //
        $(this).addClass('form_free_btn_active');
        //
        $('#form_free_name').attr('placeholder', 'Имя*');
    });
    //----POPUP-------настройка кнопок формы отправки и отображение необходимых инпутов-----
    $('.call_back_popup_question_btn').click(function() {
        $('.tg_popup_question_btn').removeClass('form_free_btn_active');
        $('.wa_popup_question_btn').removeClass('form_free_btn_active');
        //
        $(this).addClass('form_free_btn_active');
        //
        $('#popup_question_name').attr('placeholder', 'Имя*');
    });
    $('.tg_popup_question_btn').click(function() {
        $('.call_back_popup_question_btn').removeClass('form_free_btn_active');
        $('.wa_popup_question_btn').removeClass('form_free_btn_active');
        //
        $(this).addClass('form_free_btn_active');
        //
        $('#popup_question_name').attr('placeholder', 'Никнейм*');
    });
    $('.wa_popup_question_btn').click(function() {
        $('.call_back_popup_question_btn').removeClass('form_free_btn_active');
        $('.tg_popup_question_btn').removeClass('form_free_btn_active');
        //
        $(this).addClass('form_free_btn_active');
        //
        $('#popup_question_name').attr('placeholder', 'Имя*');
    });

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /*-------------открываем и закрываем раскрывающийся спсок---------*/
    //
    $('.personal_history_block ').click(function() {
        $(this)
            .children('.evidence')
            .children('.btn_pl_mn')
            .toggleClass('btn_plus');
        $(this)
            .children('.evidence')
            .children('.btn_pl_mn')
            .toggleClass('btn_minus');
        $(this).children('ul').slideToggle();
        $(this).children('.personal_history_way_p').slideToggle();
    });

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    //--------открываем и скрываем ответы на часто задаваемые вопросы-------
    ////
    $('.questions').click(function() {
        //
        if (
            $(this).children('.evidence').children('.btn_pl_mn').hasClass('btn_plus')
        ) {
            $('.questions')
                .children('.evidence')
                .children('.btn_pl_mn')
                .addClass('btn_plus');
            $('.questions')
                .children('.evidence')
                .children('.btn_pl_mn')
                .removeClass('btn_minus');
            $('.questions').children('p').hide(400);
            //
            $(this)
                .children('.evidence')
                .children('.btn_pl_mn')
                .removeClass('btn_plus');
            $(this)
                .children('.evidence')
                .children('.btn_pl_mn')
                .addClass('btn_minus');
            $(this).children('p').show(400);
        } else {
            $(this)
                .children('.evidence')
                .children('.btn_pl_mn')
                .removeClass('btn_minus');
            $(this).children('.evidence').children('.btn_pl_mn').addClass('btn_plus');
            $(this).children('p').hide(400);
        }
    });
});

//
//
//
//
//
//
//
//
//
//

/*-----------------анимации----------------------*/

/**/
var block_show2 = false;
/**/
var block_show4_1 = false;
var block_show4_2 = false;
var block_show4_3 = false;
/** */
var block_show6 = false;
/**/
var block_show8_1 = false;
var block_show8_2 = false;
var block_show8_3 = false;
/** */
var block_show11 = false;
var block_show12 = false;
var block_show14 = false;
//

//2блок
function scrollTracking2() {
    if (block_show2) {
        return false;
    }
    /*--*/
    var wt2 = $(window).scrollTop(); //определяет расстояние прокрутки
    var wh2 = $(window).height();
    var dh2 = $(document).height();
    /*----------*/
    var et2 = $('.info_tech_num').offset().top; //определяет расстояние от верха страницы до нашего блока
    var eh2 = $('.info_tech_num').outerHeight();

    /*-----*/
    if (wt2 + wh2 >= et2 || wh2 + wt2 == dh2 || eh2 + et2 < wh2) {
        block_show2 = true;
        setTimeout(function() {
            $('.info_tech_num').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({ countNum: $this.text() }).animate({
                        countNum: countTo,
                    },

                    {
                        duration: 3000,
                        easing: 'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        },
                    }
                );
            });
        }, 1500);
    }
}

//4блок

function scrollTracking4_1() {
    if (block_show4_1) {
        return false;
    }
    //
    var wt4 = $(window).scrollTop();
    var wh4 = $(window).height();
    var dh4 = $(document).height();

    var et4_1 = $('.course_for_block_1').offset().top;
    var eh4_1 = $('.course_for_block_1').outerHeight();

    if (wt4 + wh4 >= et4_1 || wh4 + wt4 == dh4 || eh4_1 + et4_1 < wh4) {
        block_show4_1 = true;
        console.log('11111');

        setTimeout(function() {
            $('.course_for_block_1').css({ opacity: '1' });
        }, 1000);
    }
}

function scrollTracking4_2() {
    if (block_show4_2) {
        return false;
    }
    //
    var wt4 = $(window).scrollTop();
    var wh4 = $(window).height();
    var dh4 = $(document).height();

    var et4_2 = $('.course_for_block_2').offset().top;
    var eh4_2 = $('.course_for_block_2').outerHeight();

    if (wt4 + wh4 >= et4_2 || wh4 + wt4 == dh4 || eh4_2 + et4_2 < wh4) {
        block_show4_2 = true;
        console.log('222222');
        setTimeout(function() {
            $('.course_for_block_2').css({ opacity: '1' });
        }, 1200);
    }
}

function scrollTracking4_3() {
    if (block_show4_3) {
        return false;
    }
    //
    var wt4 = $(window).scrollTop();
    var wh4 = $(window).height();
    var dh4 = $(document).height();

    var et4_3 = $('.course_for_block_3').offset().top;
    var eh4_3 = $('.course_for_block_3').outerHeight();

    if (wt4 + wh4 >= et4_3 || wh4 + wt4 == dh4 || eh4_3 + et4_3 < wh4) {
        block_show4_2 = true;
        console.log('33333');
        setTimeout(function() {
            $('.course_for_block_3').css({ opacity: '1' });
        }, 1400);
    }
}

//6 блок
function scrollTracking6() {
    if (block_show6) {
        return false;
    }
    //
    var wt6 = $(window).scrollTop();
    var wh6 = $(window).height();
    var dh6 = $(document).height();

    var et6 = $('.advantages_1').offset().top;
    var eh6 = $('.advantages_1').outerHeight();

    if (wt6 + wh6 >= et6 || wh6 + wt6 == dh6 || eh6 + et6 < wh6) {
        block_show6 = true;

        $('.advantages_1').css({ opacity: '1' });

        setTimeout(function() {
            $('.advantages_2').css({ opacity: '1' });
        }, 1000);
        setTimeout(function() {
            $('.advantages_3').css({ opacity: '1' });
        }, 1500);
        setTimeout(function() {
            $('.advantages_4').css({ opacity: '1' });
        }, 2000);
        setTimeout(function() {
            $('.advantages_5').css({ opacity: '1' });
        }, 2500);
        setTimeout(function() {
            $('.advantages_6').css({ opacity: '1' });
        }, 3000);
    }
}
//8 блок
function scrollTracking8_1() {
    if (block_show8_1) {
        return false;
    }
    //
    var wt8 = $(window).scrollTop();
    var wh8 = $(window).height();
    var dh8 = $(document).height();

    var et8_1 = $('.acquired_skills_block_1').offset().top;
    var eh8_1 = $('.acquired_skills_block_1').outerHeight();

    if (wt8 + wh8 >= et8_1 || wh8 + wt8 == dh8 || eh8_1 + et8_1 < wh8) {
        block_show8_1 = true;
        console.log('81');

        setTimeout(function() {
            $('.acquired_skills_block_1').css({ opacity: '1' });
        }, 1000);
    }
}

function scrollTracking8_2() {
    if (block_show8_2) {
        return false;
    }
    //
    var wt8 = $(window).scrollTop();
    var wh8 = $(window).height();
    var dh8 = $(document).height();
    var et8_2 = $('.acquired_skills_block_2').offset().top;
    var eh8_2 = $('.acquired_skills_block_2').outerHeight();

    if (wt8 + wh8 >= et8_2 || wh8 + wt8 == dh8 || eh8_2 + et8_2 < wh8) {
        block_show8_2 = true;
        console.log('82');

        setTimeout(function() {
            $('.acquired_skills_block_2').css({ opacity: '1' });
        }, 1200);
    }
}

function scrollTracking8_3() {
    if (block_show8_3) {
        return false;
    }
    //
    var wt8 = $(window).scrollTop();
    var wh8 = $(window).height();
    var dh8 = $(document).height();
    var et8_3 = $('.acquired_skills_block_3').offset().top;
    var eh8_3 = $('.acquired_skills_block_3').outerHeight();

    if (wt8 + wh8 >= et8_3 || wh8 + wt8 == dh8 || eh8_3 + et8_3 < wh8) {
        block_show8_3 = true;
        console.log('83');

        setTimeout(function() {
            $('.acquired_skills_block_3').css({ opacity: '1' });
        }, 1400);
    }
}
/*
function scrollTracking8() {
    if (block_show8) {
        return false;
    }
    //
    

    var et8 = $('.activate_animate_8').offset().top;
    var eh8 = $('.activate_animate_8').outerHeight();

    if (wt8 + wh8 >= et8 || wh8 + wt8 == dh8 || eh8 + et8 < wh8) {
        block_show8 = true;

        $('.acquired_skills_block_1').css({ opacity: '1' });

        setTimeout(function() {
            $('.acquired_skills_block_2').css({ opacity: '1' });
        }, 1000);
        setTimeout(function() {
            $('.acquired_skills_block_3').css({ opacity: '1' });
        }, 2000);
    }
}*/
//11 блок
function scrollTracking11() {
    if (block_show11) {
        return false;
    }
    //
    var wt11 = $(window).scrollTop();
    var wh11 = $(window).height();
    var dh11 = $(document).height();

    var et11 = $('.activate_animate_11').offset().top;
    var eh11 = $('.activate_animate_11').outerHeight();

    if (wt11 + wh11 >= et11 || wh11 + wt11 == dh11 || eh11 + et11 < wh11) {
        block_show11 = true;

        $('.circle-big').addClass('circle-big-an');
        $('.response_num_1').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text() }).animate({
                    countNum: countTo,
                },

                {
                    duration: 3000,
                    easing: 'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    },
                }
            );
        });
    }
}
//12 блок
function scrollTracking12() {
    if (block_show12) {
        return false;
    }
    //

    var wt12 = $(window).scrollTop();
    var wh12 = $(window).height();
    var dh12 = $(document).height();

    var et12 = $('.employment_number_arranged').offset().top;
    var eh12 = $('.employment_number_arranged').outerHeight();

    if (wt12 + wh12 >= et12 || wh12 + wt12 == dh12 || eh12 + et12 < wh12) {
        block_show12 = true;

        $('.employment_1').css({ opacity: '1' });

        setTimeout(function() {
            $('.employment_2').css({ opacity: '1' });
        }, 1000);
        setTimeout(function() {
            $('.employment_3').css({ opacity: '1' });
        }, 2000);
        setTimeout(function() {
            $('.employment_4').css({ opacity: '1' });
        }, 3000);
    }
}
//14 блок
function scrollTracking14() {
    if (block_show14) {
        return false;
    }
    //
    var wt14 = $(window).scrollTop();
    var wh14 = $(window).height();
    var dh14 = $(document).height();

    var et14 = $('.activate_animate_14').offset().top;
    var eh14 = $('.activate_animate_14').outerHeight();

    if (wt14 + wh14 >= et14 || wh14 + wt14 == dh14 || eh14 + et14 < wh14) {
        block_show14 = true;

        $('.bonus_1').css({ opacity: '1' });

        setTimeout(function() {
            $('.bonus_2').css({ opacity: '1' });
        }, 1000);
        setTimeout(function() {
            $('.bonus_3').css({ opacity: '1' });
        }, 2000);
        setTimeout(function() {
            $('.bonus_4').css({ opacity: '1' });
        }, 3000);
    }
}
//
//
//

$(window).scroll(function() {
    scrollTracking2();
    /** */
    scrollTracking4_1();
    scrollTracking4_2();
    scrollTracking4_3();
    /** */
    scrollTracking6();
    /** */
    scrollTracking8_1();
    scrollTracking8_2();
    scrollTracking8_3();
    /** */
    scrollTracking11();
    scrollTracking12();
    scrollTracking14();
});
//});

$(document).ready(function() {
    scrollTracking2();
    /** */
    scrollTracking4_1();
    scrollTracking4_2();
    scrollTracking4_3();
    /** */
    scrollTracking6();
    /** */
    scrollTracking8_1();
    scrollTracking8_2();
    scrollTracking8_3();
    /** */
    scrollTracking11();
    scrollTracking12();
    scrollTracking14();
});

/*-------*/