


 const inputElem = document.querySelector('#name-input');
 const outputElem = document.querySelector('#name-output');

 inputElem.addEventListener('input', (event) => {
    event.preventDefault();
    
     const user = inputElem.value.trim();
     if (user) {
         
         outputElem.textContent = user;
         
     }
     else {
         
        outputElem.textContent = 'Anonymous';
       
    }

 });
console.log(inputElem);
 

