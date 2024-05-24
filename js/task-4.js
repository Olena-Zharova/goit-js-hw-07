
const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', event => {

    event.preventDefault();

    const emailInput = formElem.elements['email'];
      const passwordInput = formElem.elements['password'];

      const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
        if (emailValue === '' || passwordValue === '') {
       return alert('All form fields must be filled in');  
        }
    
     const formNew = {
        email: emailValue,
        password: passwordValue
      };

      console.log(formNew);
      form.reset();
    
    

 
});