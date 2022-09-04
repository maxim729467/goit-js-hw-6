const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.innerText = ingredient;
  return listItem;
});

list.append(...items);
