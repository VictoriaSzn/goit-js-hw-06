let counterValue = 0;
const BtnClckUp = document.querySelector('[data-action="increment"]');
const BtnClckDn = document.querySelector('[data-action="decrement"]');
const SpanValue = document.querySelector('#value');

BtnClckUp.addEventListener("click", CountValueUp);
BtnClckDn.addEventListener("click", CountValueDn);

function CountValueUp(event) {
     counterValue += 1;
    SpanValue.innerHTML = counterValue;
}

function CountValueDn(event) {
     counterValue -= 1;
    SpanValue.innerHTML = counterValue;
}