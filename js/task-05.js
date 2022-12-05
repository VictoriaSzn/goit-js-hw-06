const inputEL = document.querySelector('#name-input');
const textEL = document.querySelector('h1 > span');

inputEL.addEventListener('input', onInputChange);
function onInputChange(event) {
    textEL.textContent = event.currentTarget.value; 
}