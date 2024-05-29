const buttonPress = document.querySelector(".change-color");
const backgroundColorText = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonPress.addEventListener("click", function () {
  const newColorElem = getRandomHexColor();
  document.body.style.backgroundColor = newColorElem;
  backgroundColorText.textContent = newColorElem;
});
