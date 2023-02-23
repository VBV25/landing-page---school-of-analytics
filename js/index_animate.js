$(document).ready(function () {
  /*----------------скролл страницы вверх----------------*/
  $('#back-top').fadeOut();

  if ($(window).width() >= 1000) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });
    $('#back-top a').click(function () {
      $('body,html').animate({ scrollTop: 0 }, 1200);
      return false;
    });
  } else if ($(window).width() >= 660) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });
    $('#back-top a').click(function () {
      $('body,html').animate({ scrollTop: 0 }, 1200);
      return false;
    });
  } else if ($(window).width() >= 0) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });
    $('#back-top a').click(function () {
      $('body,html').animate({ scrollTop: 0 }, 1200);
      return false;
    });
  }
  //присвоение кнопке бургер класса активации
  $('.burger_btn_wrapper').click(function () {
    $('.burger_btn_wrapper').toggleClass('burger_btn_wrapper_active');
    $('.burger_btn_wrapper').toggleClass('burger_btn_wrapper_not_active');
    $('.nav_block_header_open').toggleClass('active_block');
    $('.nav_block_header_open').toggleClass('no_active_block');
  });
  //

  //----------------------------------------
  //---------открытие и закрытие popup------
  //----------------------------------------

  //---открываем
  //запись
  $('.btn_header_form').click(function () {
    $('.pop_up_question_wrapper').css({ display: 'flex' });
    //заголовок
    $('.subscribe_h3').html(
      'Запишись на курс или задай вопрос на консультации'
    );
    //кнопка
    $('#btn_popup_subscribe_order').html('Записаться на курс');
  });
  $('#btn_1_section_note').click(function () {
    $('.pop_up_question_wrapper').css({ display: 'flex' });
    //заголовок
    $('.subscribe_h3').html(
      'Запишись на курс или задай вопрос на консультации'
    );
    //кнопка
    $('#btn_popup_subscribe_order').html('Записаться на курс');
  });
  //вопрос
  $('.footer_questions_btn').click(function () {
    $('.pop_up_question_wrapper').css({ display: 'flex' });
    //заголовок
    $('.subscribe_h3').html('Задай вопрос на консультации');
    //кнопка
    $('#btn_popup_subscribe_order').html('Задать вопрос');
  });
  //---закрываем
  $('#popup_question_btn_close').click(function () {
    $('.pop_up_question_wrapper').css({ display: 'none' });
  });
  $(document).on('keyup', function (e) {
    if (e.keyCode == 27) {
      $('.pop_up_question_wrapper').css({ display: 'none' });
      $('.btn_blue').css({ borderColor: 'red' });
    }
  });
  //

  //-----НАЧАТЬ БЕСПЛАТНО-------настройка кнопок формы отправки и отображение необходимых инпутов-----
  $('.call_back_btn_open_form').click(function () {
    $('.tg_btn_open_form').removeClass('form_free_btn_active');
    $('.wa_btn_open_form').removeClass('form_free_btn_active');
    $(this).addClass('form_free_btn_active');
    $('#form_free_name').attr('placeholder', 'Имя*');
  });
  $('.tg_btn_open_form').click(function () {
    $('.call_back_btn_open_form').removeClass('form_free_btn_active');
    $('.wa_btn_open_form').removeClass('form_free_btn_active');
    $(this).addClass('form_free_btn_active');
    $('#form_free_name').attr('placeholder', 'Никнейм*');
  });
  $('.wa_btn_open_form').click(function () {
    $('.call_back_btn_open_form').removeClass('form_free_btn_active');
    $('.tg_btn_open_form').removeClass('form_free_btn_active');
    $(this).addClass('form_free_btn_active');
    $('#form_free_name').attr('placeholder', 'Имя*');
  });
  //----POPUP-------настройка кнопок формы отправки и отображение необходимых инпутов-----
  $('.call_back_popup_question_btn').click(function () {
    $('.tg_popup_question_btn').removeClass('form_free_btn_active');
    $('.wa_popup_question_btn').removeClass('form_free_btn_active');
    $(this).addClass('form_free_btn_active');
    $('#popup_question_name').attr('placeholder', 'Имя*');
  });
  $('.tg_popup_question_btn').click(function () {
    $('.call_back_popup_question_btn').removeClass('form_free_btn_active');
    $('.wa_popup_question_btn').removeClass('form_free_btn_active');
    $(this).addClass('form_free_btn_active');
    $('#popup_question_name').attr('placeholder', 'Никнейм*');
  });
  $('.wa_popup_question_btn').click(function () {
    $('.call_back_popup_question_btn').removeClass('form_free_btn_active');
    $('.tg_popup_question_btn').removeClass('form_free_btn_active');
    $(this).addClass('form_free_btn_active');
    $('#popup_question_name').attr('placeholder', 'Имя*');
  });
  //

  /*-------------открываем и закрываем раскрывающийся спсок---------*/
  $('.personal_history_block ').click(function () {
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

  //--------открываем и скрываем ответы на часто задаваемые вопросы-------
  $('.questions').click(function () {
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

/*-----------------------------------------------------------*/
/*-----------------------анимации----------------------------*/
/*-----------------------------------------------------------*/

//

/*----------------*/
/*-Бегущая строка-*/
/*----------------*/
$(function () {
  var marquee = $('.slide_job_examples');
  marquee.css({ overflow: 'hidden', width: '100%' });
  // оболочка для текста ввиде span
  marquee.wrapInner('<span>');
  marquee.find('span').css({ width: '50%', display: 'flex' });
  //
  marquee.wrapInner('<div>');
  marquee.find('div').css('width', '200%');
  var reset = function () {
    $(this).css('margin-left', '0%');
    if ($(window).width() >= 1520) {
      $(this).animate({ 'margin-left': '-195%' }, 130000, 'linear', reset);
      //console.log('1');
    } else if ($(window).width() >= 1380) {
      $(this).animate({ 'margin-left': '-225%' }, 130000, 'linear', reset);
      // console.log('2');
    } else if ($(window).width() >= 1260) {
      $(this).animate({ 'margin-left': '-255%' }, 130000, 'linear', reset);
      // console.log('3');
    } else if ($(window).width() >= 1160) {
      $(this).animate({ 'margin-left': '-285%' }, 130000, 'linear', reset);
      // console.log('4');
    } else if ($(window).width() >= 1060) {
      $(this).animate({ 'margin-left': '-305%' }, 130000, 'linear', reset);
      // console.log('5');
    } else if ($(window).width() >= 989) {
      $(this).animate({ 'margin-left': '-355%' }, 130000, 'linear', reset);
      // console.log('6');
    } else if ($(window).width() >= 777) {
      $(this).animate({ 'margin-left': '-335%' }, 130000, 'linear', reset);
      // console.log('7');
    } else if ($(window).width() >= 660) {
      $(this).animate({ 'margin-left': '-390%' }, 130000, 'linear', reset);
      //console.log('8');
    } else if ($(window).width() >= 590) {
      $(this).animate({ 'margin-left': '-455%' }, 130000, 'linear', reset);
      //console.log('9');
    } else if ($(window).width() >= 500) {
      $(this).animate({ 'margin-left': '-535%' }, 130000, 'linear', reset);
      //console.log('10');
    } else if ($(window).width() >= 464) {
      $(this).animate({ 'margin-left': '-620%' }, 130000, 'linear', reset);
      //console.log('11');
    } else if ($(window).width() >= 400) {
      $(this).animate({ 'margin-left': '-530%' }, 130000, 'linear', reset);
      //console.log('12');
    } else if ($(window).width() >= 350) {
      $(this).animate({ 'margin-left': '-630%' }, 130000, 'linear', reset);
      // console.log('13');
    } else if ($(window).width() >= 270) {
      $(this).animate({ 'margin-left': '-720%' }, 130000, 'linear', reset);
      //console.log('14');
    } else if ($(window).width() >= 240) {
      $(this).animate({ 'margin-left': '-820%' }, 130000, 'linear', reset);
      // console.log('15');
    } else if ($(window).width() >= 212) {
      $(this).animate({ 'margin-left': '-920%' }, 130000, 'linear', reset);
      // console.log('16');
    } else if ($(window).width() >= 100) {
      $(this).animate({ 'margin-left': '-1040%' }, 130000, 'linear', reset);
      //console.log('17');
    } else if ($(window).width() >= 0) {
      $(this).animate({ 'margin-left': '-1160%' }, 130000, 'linear', reset);
      // console.log('mobile');
    }
  };

  reset.call(marquee.find('div'));
});
//

/*---------------------------------*/
/*-отображение и скрытие элементов-*/
/*---------------------------------*/
$(document).scroll(function () {
  const wt = $(window).scrollTop();
  const wh = $(window).height();
  const dh = $(document).height();
  //2 блок
  let et2 = $('.info_tech_num').offset().top;
  let eh2 = $('.info_tech_num').outerHeight();
  //4 блок
  let et4_1 = $('.course_for_block_1').offset().top;
  let eh4_1 = $('.course_for_block_1').outerHeight();
  let et4_2 = $('.course_for_block_2').offset().top;
  let eh4_2 = $('.course_for_block_2').outerHeight();
  let et4_3 = $('.course_for_block_3').offset().top;
  let eh4_3 = $('.course_for_block_3').outerHeight();

  let et4_exu = $('.course_for_wrapper').offset().top;
  let et4_exd = $('.block_group_advantages').offset().top;
  //6 блок
  let et6 = $('.advantages_1').offset().top;
  let eh6 = $('.advantages_1').outerHeight();
  //8 блок
  let et8_1 = $('.acquired_skills_block_1').offset().top;
  let eh8_1 = $('.acquired_skills_block_1').outerHeight();
  let et8_2 = $('.acquired_skills_block_2').offset().top;
  let eh8_2 = $('.acquired_skills_block_2').outerHeight();
  let et8_3 = $('.acquired_skills_block_3').offset().top;
  let eh8_3 = $('.acquired_skills_block_3').outerHeight();

  let et8_exu = $('.acquired_skills_wrapper').offset().top;
  let et8_exd = $('.stage_transform_span').offset().top;
  //11 блок
  let et11 = $('.statistics_block').offset().top;
  let eh11 = $('.statistics_block').outerHeight();
  //12 блок
  let et12_1 = $('.employment_1').offset().top;
  let eh12_1 = $('.employment_1').outerHeight();
  let et12_2 = $('.employment_2').offset().top;
  let eh12_2 = $('.employment_2').outerHeight();
  let et12_3 = $('.employment_3').offset().top;
  let eh12_3 = $('.employment_3').outerHeight();
  let et12_4 = $('.employment_4').offset().top;
  let eh12_4 = $('.employment_4').outerHeight();

  let et12_exu = $('.employment_wrapper').offset().top;
  let et12_exd = $('.training_program_span').offset().top;
  //14 блок
  let et14_1 = $('.bonus_1').offset().top;
  let eh14_1 = $('.bonus_1').outerHeight();
  let et14_2 = $('.bonus_2').offset().top;
  let eh14_2 = $('.bonus_2').outerHeight();
  let et14_3 = $('.bonus_3').offset().top;
  let eh14_3 = $('.bonus_3').outerHeight();
  let et14_4 = $('.bonus_4').offset().top;
  let eh14_4 = $('.bonus_4').outerHeight();

  let et14_exu = $('.bonus_wrapper').offset().top;
  let et14_exd = $('.td_rate_anchor').offset().top;
  //---------------------------------------------------------------------------------

  //----------------------------2 блок--------------------------------------
  if (wt + wh >= et2 || wh + wt == dh || eh2 + et2 < wh) {
    setTimeout(function () {
      $('.info_tech_num').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 3000,
            easing: 'linear',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
    }, 800);
  }
  //---------------------------------------------------------------------------------

  //----------------------------4 блок--------------------------------------
  //отображение
  if (wt + wh >= et4_1 || wh + wt == dh || eh4_1 + et4_1 < wh) {
    setTimeout(function () {
      $('.course_for_block_1').css({ opacity: '1' });
    }, 400);
  }
  if (wt + wh >= et4_2 || wh + wt == dh || eh4_2 + et4_2 < wh) {
    setTimeout(function () {
      $('.course_for_block_2').css({ opacity: '1' });
    }, 600);
  }
  if (wt + wh >= et4_3 || wh + wt == dh || eh4_3 + et4_3 < wh) {
    setTimeout(function () {
      $('.course_for_block_3').css({ opacity: '1' });
    }, 800);
  }
  //скрытие
  if (wt + wh >= et4_exd || wt + wh <= et4_exu) {
    $('.course_for_block_1').css({ opacity: '0' });
    $('.course_for_block_2').css({ opacity: '0' });
    $('.course_for_block_3').css({ opacity: '0' });
  }

  //---------------------------------------------------------------------------------

  //----------------------------6 блок--------------------------------------
  if (wt + wh >= et6 || wh + wt == dh || eh6 + et6 < wh) {
    block_show6 = true;

    $('.advantages_1').css({ opacity: '1' });

    setTimeout(function () {
      $('.advantages_2').css({ opacity: '1' });
    }, 400);
    setTimeout(function () {
      $('.advantages_3').css({ opacity: '1' });
    }, 800);
    setTimeout(function () {
      $('.advantages_4').css({ opacity: '1' });
    }, 1200);
    setTimeout(function () {
      $('.advantages_5').css({ opacity: '1' });
    }, 1600);
    setTimeout(function () {
      $('.advantages_6').css({ opacity: '1' });
    }, 2000);
  }

  //---------------------------------------------------------------------------------

  //-----------------------------8 блок-------------------------
  if (wt + wh >= et8_1 || wh + wt == dh || eh8_1 + et8_1 < wh) {
    setTimeout(function () {
      $('.acquired_skills_block_1').css({ opacity: '1' });
    }, 400);
  }
  if (wt + wh >= et8_2 || wh + wt == dh || eh8_2 + et8_2 < wh) {
    setTimeout(function () {
      $('.acquired_skills_block_2').css({ opacity: '1' });
    }, 600);
  }
  if (wt + wh >= et8_3 || eh8_3 + et8_3 < wh) {
    setTimeout(function () {
      $('.acquired_skills_block_3').css({ opacity: '1' });
    }, 800);
  }
  //скрытие
  if (wt + wh >= et8_exd || wt + wh <= et8_exu) {
    $('.acquired_skills_block_1').css({ opacity: '0' });
    $('.acquired_skills_block_2').css({ opacity: '0' });
    $('.acquired_skills_block_3').css({ opacity: '0' });
  }
  //---------------------------------------------------------------------------------

  //----------------------------11 блок---кружки----------------------
  if (wt + wh >= et11 || wh + wt == dh || eh11 + et11 < wh) {
    $('.circle-big').addClass('circle-big-an');
    $('.response_num_1').each(function () {
      let $this = $(this),
        countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  }
  //---------------------------------------------------------------------------------

  //-----------------------------12 блок-------------------------
  if (wt + wh >= et12_1 || wh + wt == dh || eh12_1 + et12_1 < wh) {
    setTimeout(function () {
      $('.employment_1').css({ opacity: '1' });
    }, 400);
  }
  if (wt + wh >= et12_2 || wh + wt == dh || eh12_2 + et12_2 < wh) {
    setTimeout(function () {
      $('.employment_2').css({ opacity: '1' });
    }, 600);
  }
  if (wt + wh >= et12_3 || wh + wt == dh || eh12_3 + et12_3 < wh) {
    setTimeout(function () {
      $('.employment_3').css({ opacity: '1' });
    }, 800);
  }
  if (wt + wh >= et12_4 || wh + wt == dh || eh12_4 + et12_4 < wh) {
    setTimeout(function () {
      $('.employment_4').css({ opacity: '1' });
    }, 1000);
  }
  //скрыть
  if (wt + wh >= et12_exd || wt + wh <= et12_exu) {
    $('.employment_1').css({ opacity: '0' });
    $('.employment_2').css({ opacity: '0' });
    $('.employment_3').css({ opacity: '0' });
    $('.employment_4').css({ opacity: '0' });
  }

  //---------------------------------------------------------------------------------

  //-----------------------------14 блок-------------------------
  if (wt + wh >= et14_1 || wh + wt == dh || eh14_1 + et14_1 < wh) {
    setTimeout(function () {
      $('.bonus_1').css({ opacity: '1' });
    }, 400);
  }
  if (wt + wh >= et14_2 || wh + wt == dh || eh14_2 + et14_2 < wh) {
    setTimeout(function () {
      $('.bonus_2').css({ opacity: '1' });
    }, 600);
  }
  if (wt + wh >= et14_3 || wh + wt == dh || eh14_3 + et14_3 < wh) {
    setTimeout(function () {
      $('.bonus_3').css({ opacity: '1' });
    }, 800);
  }
  if (wt + wh >= et14_4 || wh + wt == dh || eh14_4 + et14_4 < wh) {
    setTimeout(function () {
      $('.bonus_4').css({ opacity: '1' });
    }, 1000);
  }
  //скрыть
  if (wt + wh >= et14_exd || wt + wh <= et14_exu) {
    $('.bonus_1').css({ opacity: '0' });
    $('.bonus_2').css({ opacity: '0' });
    $('.bonus_3').css({ opacity: '0' });
    $('.bonus_4').css({ opacity: '0' });
  }
  //---------------------------------------------------------------------------------
});
