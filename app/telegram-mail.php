<?php

/* https://api.telegram.org/bot1408324998:AAE3fOILkdLpWDZvbvu32tqxN4bQl9KPEBQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */



$projectname = $_POST['project_name'];
$formsubject = $_POST['form_subject'];
$formplace = $_POST['form_place'];
$formoption = $_POST['form_option'];

$name = $_POST['myname'];
$email = $_POST['myemail'];
$phone = $_POST['myphone'];
$mytheme = $_POST['mytheme'];

$token = "1408324998:AAE3fOILkdLpWDZvbvu32tqxN4bQl9KPEBQ";
$chat_id = "-330347791";
$arr = array(
  'Адрес проекта: ' => $projectname,
  'Предмет сообщения: ' => $formsubject,
	'Место размещения формы: ' => $formplace,
	'Опции формы: ' => $formoption,
		
	
	'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Тема сообщения' => $mytheme
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>
