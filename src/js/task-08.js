const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Array.from(form.elements).reduce((acc, element) => {
    if (!element.name) return acc;
    acc[element.name] = element.value;
    return acc;
  }, {});

  const isFilledIn = Object.values(data).every((val) => val.trim().length);

  if (!isFilledIn) {
    alert("All fiels must be filled in");
    return;
  }

  console.log(data);
  e.target.reset();
});
