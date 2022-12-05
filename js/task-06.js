const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", classCarrent);

function classCarrent(){
  
  if (textInput.value.length !== Number(textInput.dataset.length)) {
    textInput.classList.remove(`valid`);
    textInput.classList.add(`invalid`);
    
  } else textInput.classList.replace(`invalid`, `valid`);
};

