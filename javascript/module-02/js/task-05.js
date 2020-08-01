'use strict';

const checkForSpam = function (message) {
  message = message.toLowerCase();
  // message = message.split(' ');
  console.log(message);
  if (message.includes('spam') || message.includes('sale')) {
    return true;
  } else {
    return false;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
