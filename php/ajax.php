<?php
$name_input_1 = htmlspecialchars($_POST['name_input_1']);
$phone_input_1 = htmlspecialchars($_POST['phone_input_1']);
//

//ОТПРАВКА 

$subject = "Начать бесплатно.";
$spase = ".";
$headers = "From:\r\n \r\n $spase\r\n $spase\r\n $spase\r\n ЗАЯВКА НА ОБУЧЕНИЕ.\r\n \r\n 
От посетителя сайта: Школа Кулешова\r\n \r\n
Имя: $name_input_1 \r\n 
Телефон: $phone_input_1\r\n 
 
 $spase\r\n $spase\r\n $spase\r\n $spase\r\n";


if (mail(
    "bacourses@yandex.ru",
    $subject,
    $headers

))
    echo  "Сообщение отправлено!"/*Сообщение отправлено*/;
else
    echo "Сообщение не отправлено!"/*Сообщение не отправлено*/;
