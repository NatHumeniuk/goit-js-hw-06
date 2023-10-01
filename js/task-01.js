const listCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listCategoriesEl.length}`);
listCategoriesEl.forEach((category) => {
  const nameCategoryEl = category.querySelector("h2").textContent;
  const numberCategoryItemEl = category.querySelectorAll("li").length;
  console.log("\n");
  console.log(`Category: ${nameCategoryEl}`);
  console.log(`Elements: ${numberCategoryItemEl}`);
});
