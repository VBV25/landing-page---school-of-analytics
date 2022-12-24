/**/
$(document).ready(function() {
    /*маска ввода номера телефона*/

    $('#form_free_phone').mask('+7 999 999-99-99');
    $('#popup_question_phone').mask('+7 999 999-99-99');

    /*----------------------------------------------*/

    /*------ВАЛИДАЦИЯ-----форма отпраки на странице*/
    var valid_name_1 = 1;
    var valid_phone_1 = 1;

    /*ПРОВЕРКА НА ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ*/

    /*--------имя-страница---------*/
    $('#btn_form_order_free').mousedown(function() {
        var name_input_1 = $('#form_free_name').val();

        //

        if (name_input_1.length < 2) {
            valid_name_1 = 1;
            $('#free_form_message_show_1')
                .text('Не менее 2х символов')
                .css({ color: 'red' });
            $('#form_free_name').css({
                border: '3px solid rgb(255, 65, 65)',
                backgroundColor: 'rgb(255, 170, 170)',
            });
        }

        // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации
        else {
            $('#free_form_message_show_1').text('');

            $('#form_free_name').css({
                border: '3px solid var(--color-denim_blue)',
                backgroundColor: '#94b6f9',
            });

            valid_name_1 = 0;
        }
    });
    /*----------телефон-страница---------*/
    $('#btn_form_order_free').mousedown(function() {
        var phone_input_1 = $('#form_free_phone').val();
        var rv_phone = /^\+7\ \d{3}\ \d{3}-\d{2}-\d{2}$/; //для телефона
        var phone_valid_1 = rv_phone.test(phone_input_1);

        if (phone_input_1 == '') {
            valid_phone_1 = 1;
            $('#free_form_message_show_2')
                .text('Поле не заполнено')
                .css({ color: 'red' });
            $('#form_free_phone').css({
                border: '3px solid rgb(255, 65, 65)',
                backgroundColor: 'rgb(255, 170, 170)',
            });
        } else if (!phone_valid_1) {
            valid_phone_1 = 1;
            $('#free_form_message_show_2')
                .text('Некорректный Телефон')
                .css({ color: 'red' });
            $('#form_free_phone').css({
                border: '3px solid rgb(255, 65, 65)',
                backgroundColor: 'rgb(255, 170, 170)',
            });
        } else {
            $('#free_form_message_show_2').text('');

            $('#form_free_phone').css({
                border: '3px solid var(--color-denim_blue)',
                backgroundColor: '#94b6f9',
            });
            valid_phone_1 = 0;
        }
    });

    //
    //------ОТПРАВКА ФОРМЫ СО СТРАНИЦЫ

    $('#btn_form_order_free').on('click', function() {
        var name_input_1 = $('#form_free_name').val();
        var phone_input_1 = $('#form_free_phone').val();

        //

        console.log(valid_name_1);
        console.log(valid_phone_1);

        if (valid_name_1 == 0 && valid_phone_1 == 0) {
            console.log('отправлено');

            $.ajax({
                url: 'php/ajax.php',
                type: 'POST',
                cache: false,
                data: {
                    name_input_1: name_input_1,
                    phone_input_1: phone_input_1,
                },
                dataType: 'html',
                success: function(data) {
                    $('#free_form_message_show_3')
                        .html('Заявка ОТПРАВЛЕНА, дождитесь звонка для подтверждения')
                        .css({ color: 'var(--color-denim_blue)' });
                },
            });
            return false;
        } else {
            $('#free_form_message_show_3')
                .html(' Не отправлено')
                .css({ color: 'red' });
            console.log('Не отправлено');
            return false;
        }
    });

    //
    //
    //

    //-форма popup

    /*------ВАЛИДАЦИЯ-----форма отпраки ПОПАП*/

    /*ПРОВЕРКА НА ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ*/

    /*--------имя-страница---------*/
    $('#btn_popup_subscribe_order').mousedown(function() {
        var name_input_2 = $('#popup_question_name').val();

        //

        if (name_input_2.length < 2) {
            valid_name_1 = 1;
            $('#popup_question_message_show_1')
                .text('Не менее 2х символов')
                .css({ color: 'red' });
            $('#popup_question_name').css({
                border: '3px solid rgb(255, 65, 65)',
                backgroundColor: 'rgb(255, 170, 170)',
            });
        }

        // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации
        else {
            $('#popup_question_message_show_1').text('');

            $('#popup_question_name').css({
                border: '3px solid var(--color-denim_blue)',
                backgroundColor: '#94b6f9',
            });

            valid_name_1 = 0;
        }
    });
    /*----------телефон-страница---------*/
    $('#btn_popup_subscribe_order').mousedown(function() {
        var phone_input_2 = $('#popup_question_phone').val();
        var rv_phone = /^\+7\ \d{3}\ \d{3}-\d{2}-\d{2}$/; //для телефона
        var phone_valid_2 = rv_phone.test(phone_input_2);

        if (phone_input_2 == '') {
            valid_phone_1 = 1;
            $('#popup_question_message_show_2')
                .text('Поле не заполнено')
                .css({ color: 'red' });
            $('#popup_question_phone').css({
                border: '3px solid rgb(255, 65, 65)',
                backgroundColor: 'rgb(255, 170, 170)',
            });
        } else if (!phone_valid_2) {
            valid_phone_1 = 1;
            $('#popup_question_message_show_2')
                .text('Некорректный Телефон')
                .css({ color: 'red' });
            $('#popup_question_phone').css({
                border: '3px solid rgb(255, 65, 65)',
                backgroundColor: 'rgb(255, 170, 170)',
            });
        } else {
            $('#popup_question_message_show_2').text('');

            $('#popup_question_phone').css({
                border: '3px solid var(--color-denim_blue)',
                backgroundColor: '#94b6f9',
            });
            valid_phone_1 = 0;
        }
    });

    //
    //------ОТПРАВКА ФОРМЫ СО СТРАНИЦЫ

    $('#btn_popup_subscribe_order').on('click', function() {
        var name_input_2 = $('#popup_question_name').val();
        var phone_input_2 = $('#popup_question_phone').val();

        //

        console.log(valid_name_1);
        console.log(valid_phone_1);

        if (valid_name_1 == 0 && valid_phone_1 == 0) {
            console.log('отправлено');

            $.ajax({
                url: 'php/ajaxPopup.php',
                type: 'POST',
                cache: false,
                data: {
                    name_input_2: name_input_2,
                    phone_input_2: phone_input_2,
                },
                dataType: 'html',
                success: function(data) {
                    $('#popup_question_message_show_3')
                        .html('Заявка ОТПРАВЛЕНА, дождитесь звонка для подтверждения')
                        .css({ color: 'var(--color-denim_blue)' });
                },
            });
            return false;
        } else {
            $('#popup_question_message_show_3')
                .html(' Не отправлено')
                .css({ color: 'red' });
            console.log('Не отправлено');
            return false;
        }
    });
});