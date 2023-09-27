const userPass = document.querySelector('#validation-input');
const dataLength = parseInt(userPass.getAttribute('data-length'));

userPass.addEventListener('blur', handlerInput);

function handlerInput(event) {
    const userInput = event.currentTarget.value.length;

    if (userInput === dataLength) {
        updateStyleEl('valid', 'invalid')
    }
    else {
       updateStyleEl('invalid', 'valid',)
    }
}

function updateStyleEl(a, b) {
    userPass.classList.add(a);
    userPass.classList.remove(b);
}
