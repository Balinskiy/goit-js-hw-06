const userPass = document.querySelector('#validation-input');
const dataLength = parseInt(userPass.getAttribute('data-length'));

userPass.addEventListener('blur', handlerInput);

function handlerInput(event) {
    const userInput = event.currentTarget.value.length;

    if (userInput === dataLength) {
        userPass.classList.add('valid');
        userPass.classList.remove('invalid');
    }
    else {
        userPass.classList.add('invalid');
        userPass.classList.remove('valid');
    }
}


