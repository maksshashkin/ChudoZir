<?php 
$name = trim($_POST['text']);  
$email = trim($_POST['email']); 
$phone = trim($_POST['phone']);
$hidden = trim($_POST['title']);
$fromMail = 'Chudozir.ua'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = 'maksimshashkin@gmail.com'; //Ваша почта
$subject = 'Форма обратной связи Chudozir.ru'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "Получено письмо с сайта Chudozir.ua\n Имя: $name\nТелефон: $phone\nПочта: $email\nС какой формы отправлена заявка: $hidden"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

?>