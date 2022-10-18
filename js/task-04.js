let counterValue = 0;
const minus = document.querySelector('button[data-action="decrement"]');
const plus = document.querySelector('button[data-action="increment"]');
const result = document.querySelector("#value");

function add() {
    counterValue += 1;
    result.innerHTML = counterValue;
}

function subsctract() {
    counterValue -= 1;
    result.innerHTML = counterValue;
}

plus.addEventListener('click', add);
minus.addEventListener('click', subsctract);