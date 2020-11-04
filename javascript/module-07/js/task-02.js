const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingRef = document.querySelector("#ingredients");
let ingList = ingredients.forEach((elem) => {
  let newItem = document.createElement("li");
  newItem.textContent = elem;
  console.log(newItem);
  ingRef.append(newItem);
});
