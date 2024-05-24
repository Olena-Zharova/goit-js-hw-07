


 const inputElem = document.querySelector('#name-input');
 const outputElem = document.querySelector('#name-output');

 inputElem.addEventlistener('input', event => {
    event.preventDefault();
    
     constValue = inputElem.value.trim();
     if (value === " ") {

         outputElem.textContent = 'Anonymous';
     }
     else {
        
        outputElem.textContent = constValue;
    }

 });
console.log(inputElem);
 

