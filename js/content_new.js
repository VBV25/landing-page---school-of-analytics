//кнопки
var buttons = document.querySelectorAll('.training_program_btn');
//
var btn_1 = document.querySelector('#training_program_btn_1');
var btn_2 = document.querySelector('#training_program_btn_2');
var btn_3 = document.querySelector('#training_program_btn_3');
var btn_4 = document.querySelector('#training_program_btn_4');
var btn_5 = document.querySelector('#training_program_btn_5');
var btn_6 = document.querySelector('#training_program_btn_6');
var btn_7 = document.querySelector('#training_program_btn_7');
var btn_8 = document.querySelector('#training_program_btn_8');
var btn_9 = document.querySelector('#training_program_btn_9');
var btn_10 = document.querySelector('#training_program_btn_10');
var btn_11 = document.querySelector('#training_program_btn_11');

//блоки текста

//заголовок
var mod_h3 = document.querySelector('#training_program_h3');
//описание
var mod_p = document.querySelector('#training_program_skills');
//текст списка
var mod_li_1 = document.querySelector('#training_program_themes_1');
var mod_li_2 = document.querySelector('#training_program_themes_2');
var mod_li_3 = document.querySelector('#training_program_themes_3');
var mod_li_4 = document.querySelector('#training_program_themes_4');
var mod_li_5 = document.querySelector('#training_program_themes_5');
var mod_li_6 = document.querySelector('#training_program_themes_6');
var mod_li_7 = document.querySelector('#training_program_themes_7');
var mod_li_8 = document.querySelector('#training_program_themes_8');
var mod_li_9 = document.querySelector('#training_program_themes_9');
var mod_li_10 = document.querySelector('#training_program_themes_10');
var mod_li_11 = document.querySelector('#training_program_themes_11');

var training_program_themes_li = document.querySelector(
    '.training_program_themes_li'
);

//
//перебираем все кнопки с данным классом и при клике на любую из них удаляем класс активности у других кнопок и нынешней кнопке присваиваем класс активности

for (var i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', function(e) {
        btn_1.classList.remove('btn_blue_active');
        btn_2.classList.remove('btn_blue_active');
        btn_3.classList.remove('btn_blue_active');
        btn_4.classList.remove('btn_blue_active');
        btn_5.classList.remove('btn_blue_active');
        btn_6.classList.remove('btn_blue_active');
        btn_7.classList.remove('btn_blue_active');
        btn_8.classList.remove('btn_blue_active');
        btn_9.classList.remove('btn_blue_active');
        btn_10.classList.remove('btn_blue_active');
        btn_11.classList.remove('btn_blue_active');
        //отображаем все элемента списка
        mod_li_3.style.display = 'list-item';
        mod_li_4.style.display = 'list-item';
        mod_li_5.style.display = 'list-item';
        mod_li_6.style.display = 'list-item';
        mod_li_7.style.display = 'list-item';
        mod_li_8.style.display = 'list-item';
        mod_li_9.style.display = 'list-item';
        mod_li_10.style.display = 'list-item';
        mod_li_11.style.display = 'list-item';
        //
        this.classList.add('btn_blue_active');
    });
}

//
//

//
btn_1.addEventListener('click', function() {
    //
    mod_h3.innerHTML = 'Модуль 1. Excel';
    mod_p.innerHTML =
        ' В этом модуле ты научишься работать в Excel и изучишь большое<br>количество инструментов для вычисления и обработки данных,<br>а также научишься строить автоматизированные отчёты.<br><br> Кстати, после этого модуля ты сможешь применять эти навыки<br>на своей текущей работе, потому что любую работу можно<br>автоматизировать';
    mod_li_1.innerHTML = 'Основные элементы и инструменты в Excel';
    mod_li_2.innerHTML = 'Простейшие формулы';
    mod_li_3.innerHTML = 'Полезные инструменты в Excel';
    mod_li_4.innerHTML = 'Основные функции';
    mod_li_5.innerHTML = 'ВПР';
    mod_li_6.innerHTML = 'ЕСЛИ';
    mod_li_7.innerHTML = 'Вложенные функции';
    mod_li_8.innerHTML = 'Сводные таблицы';
    mod_li_9.innerHTML = 'Текстовые функции';
    mod_li_10.innerHTML = 'Функция И и ИЛИ';
    mod_li_11.innerHTML = 'Рабочее задание';
});
btn_2.addEventListener('click', function() {
    //

    mod_h3.innerHTML = 'Модуль 2. SQL';
    mod_p.innerHTML =
        ' Бизнес аналитику не нужно знать программирование, но в ходе работы нужно правильно выгрузить данные и сделать на их основе выводы.<br><br> Поэтому в этом модуле ты научишься работать с языком запросов к базе данных SQL. Этот язык знает каждый аналитик и использует его в работе для работы с данными. ';
    mod_li_1.innerHTML = 'О базах данных и языке SQL';
    mod_li_2.innerHTML = 'Запрос в базу данных, оператор Select';
    mod_li_3.innerHTML = 'Написание условий, с помощью оператора Where';
    mod_li_4.innerHTML =
        'Сортировка и ограничение значений, с помощью оператора Order by и Limit';
    mod_li_5.innerHTML = 'Соединение таблицы с помощью Join';
    mod_li_6.innerHTML = 'Агрегатные функции и группировка с помощью Group by';
    mod_li_7.innerHTML = 'Объединение запросов, оператор UNION';
    mod_li_8.innerHTML = 'Рабочее задание';
    mod_li_9.style.display = 'none';
    mod_li_10.style.display = 'none';
    mod_li_11.style.display = 'none';
});

btn_3.addEventListener('click', function() {
    //

    mod_h3.innerHTML = 'Модуль 3. Power BI';
    mod_p.innerHTML =
        ' В этом модуле ты научишься делать крутые дашборды. Сейчас все компании используют BI инструменты для аналитики данных (что такое BI узнаешь в курсе).<br><br> Кстати, как и с excel после этого модуля этот навык уже можно применять на текущей работе.';
    mod_li_1.innerHTML = 'Power BI. Информация о разделе курса';
    mod_li_2.innerHTML = 'Инструкция по установке Power BI';
    mod_li_3.innerHTML = 'Интерфейс Power BI';
    mod_li_4.innerHTML = 'Загрузка данных в Power BI';
    mod_li_5.innerHTML = 'Преобразование данных в Power Query';
    mod_li_6.innerHTML = 'Настройка связей';
    mod_li_7.innerHTML = 'Визуализация данных';
    mod_li_8.innerHTML = 'Рабочее задание';
    mod_li_9.style.display = 'none';
    mod_li_10.style.display = 'none';
    mod_li_11.style.display = 'none';
});
btn_4.addEventListener('click', function() {
    //
    mod_h3.innerHTML = 'Модуль 4. Этапы разработки ПО';
    mod_p.innerHTML =
        'В этом модуле ты узнаешь последовательность разработки программного обеспечения и что происходит на каждом этапе.<br><br> Для того чтобы понимать последовательность этапов и в каких этапах подключается бизнес аналитик';
    mod_li_1.innerHTML = 'Этапы разработки ПО';
    mod_li_2.innerHTML = 'Тестовые задания';
    mod_li_3.style.display = 'none';
    mod_li_4.style.display = 'none';
    mod_li_5.style.display = 'none';
    mod_li_6.style.display = 'none';
    mod_li_7.style.display = 'none';
    mod_li_8.style.display = 'none';
    mod_li_9.style.display = 'none';
    mod_li_10.style.display = 'none';
    mod_li_11.style.display = 'none';
});
btn_5.addEventListener('click', function() {
    //
    mod_h3.innerHTML = 'Модуль 5. Работа с требованиями';
    mod_p.innerHTML =
        'Чтобы сделать IT продукт нужно правильно собрать требования к этому продукту и не упустить важные элементы и нюансы, поэтому в этом модуле ты научишься правильно собирать и описывать требования.';
    mod_li_1.innerHTML = 'Классификация и определения требований';
    mod_li_2.innerHTML = 'Разработка требований';
    mod_li_3.innerHTML = 'Рабочее задание';
    mod_li_4.style.display = 'none';
    mod_li_5.style.display = 'none';
    mod_li_6.style.display = 'none';
    mod_li_7.style.display = 'none';
    mod_li_8.style.display = 'none';
    mod_li_9.style.display = 'none';
    mod_li_10.style.display = 'none';
    mod_li_11.style.display = 'none';
});
btn_6.addEventListener('click', function() {
    //
    mod_h3.innerHTML = 'Модуль 6. Бизнес процессы и нотация BPMN';
    mod_p.innerHTML =
        'В этом модуле ты изучишь построение бизнес процессов и научишься делать диаграммы, с помощью которых можно описывать бизнес процессы.';
    mod_li_1.innerHTML = 'Бизнес процессы и введение в нотацию BPMN';
    mod_li_2.innerHTML = 'События и шлюзы в BPMN';
    mod_li_3.innerHTML = 'Зоны ответственности в бизнес процессах';
    mod_li_4.innerHTML = 'Дополнительные элементы в BPMN';
    mod_li_5.innerHTML = 'Обмен сообщениями';
    mod_li_6.innerHTML = 'Рабочее задание';
    mod_li_7.style.display = 'none';
    mod_li_8.style.display = 'none';
    mod_li_9.style.display = 'none';
    mod_li_10.style.display = 'none';
    mod_li_11.style.display = 'none';
});
btn_7.addEventListener('click', function() {
    //
    mod_h3.innerHTML = 'Модуль 7. Написание ТЗ';
    mod_p.innerHTML =
        'Техническое задание — это основной инструмент бизнес аналитика. С помощью ТЗ бизнес аналитик доносит до программиста что нужно сделать.<br><br> В этом модуле ты научишься писать ТЗ так, чтобы разработчик, прочитав его, смог начать писать программу.';
    mod_li_1.innerHTML = 'Правила написания ТЗ';
    mod_li_2.innerHTML = 'Как нельзя писать ТЗ';
    mod_li_3.innerHTML = 'Как написать ТЗ для нового функционала';
    mod_li_4.innerHTML = 'Рабочее задание';
    mod_li_5.style.display = 'none';
    mod_li_6.style.display = 'none';
    mod_li_7.style.display = 'none';
    mod_li_8.style.display = 'none';
    mod_li_9.style.display = 'none';
    mod_li_10.style.display = 'none';
    mod_li_11.style.display = 'none';
});
btn_8.addEventListener('click', function() {
    //
    mod_h3.innerHTML = 'Модуль 8. Agile. Гибкие методологии разработки ПО';
    mod_p.innerHTML =
        'Сейчас почти каждая команда использует Agile подход к разработке ПО, поэтому нужно понимать, как работать по этой методологии. Поэтому в этом модуле вы узнаете про современный подход к разработке.<br><br> Agile - это гибкая методология разработки ПО, с помощью которой команда быстрее делает новые функции в продукте и больше заботиться о том что именно нужно конечному пользователю. ';
    mod_li_1.innerHTML = 'Что такое Agile';
    mod_li_2.innerHTML = 'Scrum';
    mod_li_3.innerHTML = 'Kanban';
    mod_li_4.innerHTML = 'Тестовые задания';
    mod_li_5.style.display = 'none';
    mod_li_6.style.display = 'none';
    mod_li_7.style.display = 'none';
    mod_li_8.style.display = 'none';
    mod_li_9.style.display = 'none';
    mod_li_10.style.display = 'none';
    mod_li_11.style.display = 'none';
});
btn_9.addEventListener('click', function() {
    //
    mod_h3.innerHTML = 'Модуль 9. User Story, Use Case';
    mod_p.innerHTML =
        'В этом разделе вы узнаете, как можно еще формализовать требования и задачи с помощью User Story и Use Case. Эти понятия часто используются в IT при создании новых функций в готовых продуктах.<br><br> По сути они не сильно отличаются от написания ТЗ, но нужно понимать, чем они между собой отличаются и что входит в эти понятия User Story и Use Case, чтобы ответить на них как минимум на собеседовании.';
    mod_li_1.innerHTML = 'User Story';
    mod_li_2.innerHTML = 'Use Case';
    mod_li_3.innerHTML = 'Рабочее задание';
    mod_li_4.style.display = 'none';
    mod_li_5.style.display = 'none';
    mod_li_6.style.display = 'none';
    mod_li_7.style.display = 'none';
    mod_li_8.style.display = 'none';
    mod_li_9.style.display = 'none';
    mod_li_10.style.display = 'none';
    mod_li_11.style.display = 'none';
});
btn_10.addEventListener('click', function() {
    //
    mod_h3.innerHTML = 'Модуль 10. Jira и Confluence';
    mod_p.innerHTML =
        'Jira – это таск трекер, Confluence – это пространство для написания и хранения документации. Эти инструменты есть почти в каждой команде. И в этом модуле вы научитесь ими пользоваться ';
    mod_li_1.innerHTML = 'Jira';
    mod_li_2.innerHTML = 'Confluence';
    mod_li_3.innerHTML = 'Рабочее задание';
    mod_li_4.style.display = 'none';
    mod_li_5.style.display = 'none';
    mod_li_6.style.display = 'none';
    mod_li_7.style.display = 'none';
    mod_li_8.style.display = 'none';
    mod_li_9.style.display = 'none';
    mod_li_10.style.display = 'none';
    mod_li_11.style.display = 'none';
});
btn_11.addEventListener('click', function() {
    //
    mod_h3.innerHTML = 'Модуль 11. Резюме и собеседование';
    mod_p.innerHTML =
        'После прохождения всех модулей вы станете полноценным бизнес аналитиком. Теперь вам нужно грамотно составить резюме и быстро найти работу.<br><br> В этом модуле вы получите рекомендации по резюме под ваш прошлый опыт и узнаете как проходить собеседования и делать тестовые задания';
    mod_li_1.innerHTML = 'Улучшаем резюме';
    mod_li_2.innerHTML = 'Как и где искать работу';
    mod_li_3.innerHTML = 'Как проходить собеседования чтобы получить оффер';
    mod_li_4.innerHTML = 'Тестовые задания с собеседований';
    mod_li_5.style.display = 'none';
    mod_li_6.style.display = 'none';
    mod_li_7.style.display = 'none';
    mod_li_8.style.display = 'none';
    mod_li_9.style.display = 'none';
    mod_li_10.style.display = 'none';
    mod_li_11.style.display = 'none';
});