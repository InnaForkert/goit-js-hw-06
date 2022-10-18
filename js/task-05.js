const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

function changeName() {
    span.innerHTML = input.value || "Anonymous";
}

input.addEventListener('input', changeName);
