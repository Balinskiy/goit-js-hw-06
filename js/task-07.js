const fontSizeControl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

fontSizeControl.addEventListener('input', handlerInput);

function handlerInput(event) {
    const textSize = event.currentTarget.value;
    textElement.style.fontSize = `${textSize}px`;
}
