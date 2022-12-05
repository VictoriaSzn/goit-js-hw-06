const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

     const {
        elements: { email, password }
    } = event.currentTarget;

     if (email.value === "" || password.value === "") {
      return  alert('Заповніть усі поля');
    }
    // console.log(`Login: ${email.value}, Password: ${password.value}`);
     //event.currentTarget.reset();
       
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log('name', name);
        console.log('value', value);
    })
    formEl.reset();
}

