const inputRef = document.querySelector('[type="number"]');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const divBoxesRef = document.querySelector('div#boxes');


btnCreateRef.addEventListener('click', onAmountFnc);
btnDestroyRef.addEventListener('click', destroyBoxes);


function onAmountFnc() {
  const amount = document.querySelector('[type="number"]').value;
  createBoxes(amount);
 
}

function createBoxes(amount) {
  const fragment = [];

  for (let i = 0; i < amount; i += 1) {
    const divBoxesSize = 30;
    const size = divBoxesSize + i * 10;
    const divBoxesNewRef = document.createElement('div');
    divBoxesNewRef.style.cssText = `width: ${size}px; height: ${size}px; backgroundColor: ${divBoxesNewRef.style.backgroundColor})`;
    
    divBoxesNewRef.style.backgroundColor = getRandomHexColor();
    fragment.push(divBoxesNewRef);
  }

  divBoxesRef.append(...fragment);
  
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
