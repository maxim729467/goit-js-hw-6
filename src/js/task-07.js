const range = document.getElementById("font-size-control");
const text = document.getElementById("text");

range.addEventListener(
  "input",
  (e) => (text.style.fontSize = e.target.value + "px")
);
