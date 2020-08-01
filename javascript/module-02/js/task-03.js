'use strict';

const findLongestWord = function (string) {
  let splitMessage = string.split(' ');
  let longestWord = splitMessage[0];

  for (let i = 1; i < splitMessage.length; i += 1) {
    if (longestWord.length < splitMessage[i].length) {
      longestWord = splitMessage[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
