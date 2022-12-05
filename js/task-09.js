function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const divEl = document.querySelector('.widget');
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', changeColor)

function changeColor() {
  divEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanEl.textContent = `${getRandomHexColor()}`  
    
}

