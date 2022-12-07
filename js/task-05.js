const inputEL = document.querySelector('#name-input');
const textEL = document.querySelector('h1 > span');

inputEL.addEventListener('input', onInputChange);
function onInputChange(event) {
        event.currentTarget.value ?
        textEL.textContent = event.currentTarget.value :
        textEL.textContent = "Anonymous";
}