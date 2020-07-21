"use strict";

const credits = 23580;
const pricePerDroid = 3000;

const amount = prompt("Укажите количество дронов, которое хотите купить");
if (amount === null) {
  console.log("Отменено пользователем!");
} else {
  const numberAmount = Number(amount);
  const totalPrice = numberAmount * pricePerDroid;
  console.log(totalPrice);
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    const creditsAfter = credits - totalPrice;
    console.log(
      `Вы купили ${amount} дроидов, на счету осталось ${creditsAfter} кредитов.`
    );
  }
}
