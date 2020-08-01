'use strict';

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  console.log(input);
  console.log(typeof input);
  if (isNaN(input) || input === "" ) {
    alert('Было введено не число, попробуйте ещё раз');
    continue;
  }
  numbers.push(Number(input));
  console.log(numbers);
}

if (numbers.length > 0) {
  for (let num of numbers) {
    total += num;
  }
  console.log(total);
}
