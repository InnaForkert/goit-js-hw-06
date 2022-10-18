const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
let list = document.createDocumentFragment();

// ingredients.forEach((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   list.appendChild(li);
// });
// ul.appendChild(list);
const items = ingredients.map(ingredient => {
    const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
})
ul.append(...items)