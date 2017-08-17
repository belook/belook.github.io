<?php

$recepient = "youmail@ya.ru";
$sitename = "Test";

$name = trim($_GET["name"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");