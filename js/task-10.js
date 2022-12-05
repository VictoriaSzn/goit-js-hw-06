function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateEl = document.querySelector("button[data-create]");
const btnDestrEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes);
btnDestrEl.addEventListener('click', destrBoxes);

const element = [];

function createBoxes() {
  let amount =inputEl.value;
  if (amount) {
    for (let i = 1; i <= amount; i += 1) {
      const sizeCreate = 20 + 10 * (i);
      const divEl = document.createElement('div');
      divEl.classList.add("newDiv");
      divEl.style.width = `${sizeCreate}px`;
      divEl.style.height = `${sizeCreate}px`;
      divEl.style.backgroundColor = `${getRandomHexColor()}`;
      
      element.push(divEl);
    }
    boxesEl.append(...element);
  } else { alert('оберіть кількість блоків') }
}

function destrBoxes() {
  boxesEl.innerHTML = '';
  //boxesEl.replaceChildren();
}
