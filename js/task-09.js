function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const colorElement = document.querySelector('.color');
const bodyColor = document.querySelector('body');

btnChangeColor.addEventListener('click', handlerClick);

function handlerClick() {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor; 
  colorElement.textContent = randomColor; 
}

