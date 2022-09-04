const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
const defaultValue = output.textContent;

input.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  output.textContent = value.length ? value : defaultValue;
});
