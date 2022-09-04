const counter = document.querySelector("#value");
const buttons = document.querySelectorAll("button");
let value = +counter.innerText;

Array.prototype.forEach.call(buttons, (btn) => {
  btn.addEventListener("click", (e) => {
    const operation = e.target.dataset.action;
    if (operation === "increment") value += 1;
    else value -= 1;
    counter.innerText = value;
  });
});
