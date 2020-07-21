"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let amount = prompt("Укажите количество дронов, которое хотите купить");
if (amount === null) {
  console.log("Отменено пользователем!");
} else {
  let numberAmount = Number(amount);
  let totalPrice = numberAmount * pricePerDroid;
  console.log(totalPrice);
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    let creditsAfter = credits - totalPrice;
    console.log(
      `Вы купили ${amount} дроидов, на счету осталось ${creditsAfter} кредитов.`
    );
  }
}
