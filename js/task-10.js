function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let input = document.querySelector('#controls input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");
let divSize = 30;
let divs = [];



function createBoxes() {
  let num = Number(input.value);

  for (let i = 0; i < num; i += 1) {
    let div = document.createElement("div");
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
    divSize += 10;
  }
  boxes.append(...divs);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  divs = [];
  divSize = 30;
}

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);

