const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

Array.prototype.forEach.call(categories.children, (elem) => {
  const [title, list] = elem.children;
  console.log(`Category: ${title.innerText}`);
  console.log(`Elements: ${list.children.length}`);
});
