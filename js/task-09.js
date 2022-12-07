function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const divEl = document.querySelector('body');
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', changeColor)

function changeColor() {
  let color = `${getRandomHexColor()}`;
  divEl.style.backgroundColor = color;
  spanEl.textContent = color;  
  }

