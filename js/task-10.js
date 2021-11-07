const inputRef = document.querySelector('[type="number"]');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const divBoxesRef = document.querySelector('div#boxes');
const divControlsRef = document.querySelector('div#controls');

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

let divBoxesNewRef = document.createElement('div');

// function createBoxes(amount) {
//   divBoxesNewRef.style.cssText = 'height:30px;width:30px';
//   divBoxesNewRef.style.backgroundColor = getRandomHexColor();

//   divBoxesRef.appendChild(divBoxesNewRef);
// }



function createBoxes(amount) {
  
  divBoxesNewRef.style.cssText = 'height:30px;width:30px';
  divBoxesNewRef.style.backgroundColor = getRandomHexColor();

  // elem.insertAdjacentElement(where, newElem) 
  
  // divBoxesNewRef.currentTarget.value + 'amount*10px'

  divBoxesRef.appendChild(divBoxesNewRef);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
