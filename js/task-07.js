const fontSizeControl = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

function adjustFontSize() {
    let fontSize = fontSizeControl.value;
    span.style.fontSize = `${fontSize}px`;
}

fontSizeControl.addEventListener('input', adjustFontSize);
