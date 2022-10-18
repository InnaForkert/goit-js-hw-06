function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorName.innerHTML = getRandomHexColor();
}

colorBtn.addEventListener('click', changeColor);