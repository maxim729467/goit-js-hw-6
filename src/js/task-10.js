const boxesArea = document.getElementById("boxes");
const controls = document.getElementById("controls");
const [input, createBtn, destroyBtn] = controls.children;
let boxSize;

destroyBtn.addEventListener("click", () => {
  boxesArea.innerHTML = "";
  boxSize = 0;
});

createBtn.addEventListener("click", () => {
  const amount = +input.value;
  createBoxes(amount);
});

function createBoxes(amount) {
  const boxes = Array.from({ length: amount }, () => {
    if (!boxSize) boxSize = 30;
    const box = document.createElement("div");
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    return box;
  });

  boxesArea.append(...boxes);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
