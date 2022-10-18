const input = document.querySelector("#validation-input");

function validate() {
    if (input.value.length.toString() === input.dataset.length) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        console.log(input.value.length.toString())
        console.log(input.dataset.length)

    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}

input.addEventListener('blur', validate)