const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = +value.textContent;

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
