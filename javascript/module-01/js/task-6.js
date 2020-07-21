"use strict";

let input;
let total = 0;

do {
  let input = prompt("Введите число");

  if (input === null) {
    break;
  }

  input = Number(input);
  total += input;
} while (true);

console.log(`Общая сумма чисел равна ${total}`);
alert(`Общая сумма чисел равна ${total}`);
