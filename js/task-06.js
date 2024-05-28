const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");

destroyButton.classList.add("destroy");
input.classList.add("input-amount");
createButton.classList.add("create");

createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

function createBoxes(amount) {
  const arrBoxElem = [];
  boxes.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const newElem = document.createElement("div");
    newElem.style.width = `${30 + i * 10}px`;
    newElem.style.height = `${30 + i * 10}px`;
    newElem.style.backgroundColor = getRandomHexColor();
    arrBoxElem.push(newElem);
  }

  boxes.append(...arrBoxElem);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}

destroyButton.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
