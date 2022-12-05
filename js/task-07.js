const InputEl = document.querySelector('#font-size-control');
const SpanEl = document.querySelector('#text');

InputEl.addEventListener("change", changeSize);


function changeSize(event) {
      
    const sizeCurrent = Number(this.value);
    SpanEl.style.fontSize = `${sizeCurrent}px`;
    //console.log(sizeCurrent);
    //console.log(SpanEl.style.fontSize);
  
}
 
