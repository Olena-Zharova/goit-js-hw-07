



 
    const contrlElem = document.querySelector('#controls');
    const boxElem = document.querySelector('#boxes');
    const inputElem = document.querySelector('input');
    const createBtn = controls.querySelector('[data-create]');
    const destroyBtn = controls.querySelector('[data-destroy]');

    destroyBtn.classList.add('destroy');
    inputElem.classList.add('input-amount');
    createBtn.classList.add('create')

    createBtn.addEventListener('click', () => {
    const amount = Number(inputElem.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      inputElem.value = '';
   }
  });

  function createBoxes(amount) {
   const arrBoxElem = [];
   boxElem.innerHTML = '';
    for (let i = 0; i < amount; i++) {
      const newBoxElem = document.createElement('div');
      newElem.style.width = `${30 + i * 10}px`;
      newElem.style.height = `${30 + i * 10}px`;
      newElem.style.backgroundColor = getRandomHexColor();
      arrBoxElem.push(newBoxElem);
    }

     boxElem.append(...arrBoxElem);
   }
   function destroyBoxes() {
    boxElem.innerHTML = '';
  }

  destroyBtn.addEventListener('click', destroyBoxes);

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
     .padStart(6, 0)}`;
 }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}



