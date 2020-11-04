const categoriesRef = document.querySelectorAll(".item");
console.log(`В списке ${categoriesRef.length} категории`);

categoriesRef.forEach((elem) => {
  console.log(`Категория: ${elem.children[0].innerText}`);
  console.log(`Количество элементов: ${elem.children[1].children.length}`);
});
