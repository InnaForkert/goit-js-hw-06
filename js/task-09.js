function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

function changeColor() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.innerHTML = color;
}

colorBtn.addEventListener("click", changeColor);
