<?php
// Check for empty fields
if(empty($_POST['phone']))
   {
   echo "No arguments Provided!";
   return false;
   }
$name = strip_tags(htmlspecialchars($_POST['name']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
   
$to = "ev.kustreeva@mail.ru";
$email_subject = "Обратный звонок с сайта  от " .$name;
$email_body = "Имя: $name\nТелефон: $phone";
$headers = "From: ev.kustreeva@mail.ru\n";
$headers .= "Заявка на обратный звонок.";   
$res = mail($to, $email_subject,$email_body,$headers);
return $res;         
?>