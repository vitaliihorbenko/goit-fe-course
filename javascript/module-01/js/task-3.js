"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let input = prompt("Введите пароль");
if (input === null) {
  message = "Отменено пользователем!";
  console.log(message);
} else if (input === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
  console.log(message);
} else {
  message = "Доступ запрещен, неверный пароль!";
  console.log(message);
}

alert(message);
