
const clickDown = document.querySelector('button[data-action="decrement"]');
const clickUp = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector('#value');

clickDown.addEventListener('click', handlerClickDown);
clickUp.addEventListener('click', handlerClickUp);

let counterValue = 0;

function handlerClickDown() {
  counterValue -= 1;
  updateCounter(); 
}

function handlerClickUp() {
  counterValue += 1;
  updateCounter(); 
}

function updateCounter() {
  valueSpan.textContent = counterValue; 
}







