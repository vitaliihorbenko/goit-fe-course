const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingRef = document.querySelector("#ingredients");
let ingList = ingredients.map((elem) => {
  let newItem = document.createElement("li");
  newItem.textContent = elem;
  console.log(newItem);
  return newItem;
});
ingRef.append(...ingList);
