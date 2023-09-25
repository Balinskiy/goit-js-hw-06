function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const colorElement = document.querySelector('.color');

btnChangeColor.addEventListener('click', handlerClick);

function handlerClick() {
  const randomColor = getRandomHexColor();
  colorElement.style.backgroundColor = randomColor; 
  colorElement.textContent = randomColor; 
}

