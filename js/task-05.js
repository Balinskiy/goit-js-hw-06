const userName = document.querySelector('#name-input');
const userGreetings = document.querySelector('#name-output');

userName.addEventListener('input', handlerInput);

  
function handlerInput(event) {
    const inputValue = event.currentTarget.value;
    userGreetings.textContent = inputValue;
}

