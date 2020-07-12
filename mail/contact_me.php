<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   )
   // !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
// $email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
$to = 'ev.kustreeva@mail.ru';
$email_subject = "Вопрос с сайта от пользователя $name";
$email_body = "Вы получили новое сообщение из формы обратной связи на сайте.\n\n"."Имя: $name\nТелефон: $phone\nСообщение: $message";
$headers = "From: ev.kustreeva@mail.ru\n";
$headers .= "Reply-To: $email_address";   
$res = mail($to,$email_subject,$email_body,$headers);
return $res;         
?>