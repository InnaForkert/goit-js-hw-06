const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

function changeName() {
    span.innerHTML = input.value;
    if (input.value === "") {
        span.innerHTML = "Anonymous";
    }
}

input.addEventListener('input', changeName);
