const inputRef = document.querySelector('[type="number"]');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const divBoxesRef = document.querySelector('div#boxes');


btnCreateRef.addEventListener('click', onAmountFnc);
btnDestroyRef.addEventListener('click', destroyBoxes);


function onAmountFnc() {
  const amount = +document.querySelector('[type="number"]').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    let divBoxesSize = 30;
    const size = divBoxesSize + i * 10;
    let divBoxesNewRef = document.createElement('div');
    divBoxesNewRef.style.cssText = `width: ${size}px; height: ${size}px; backgroundColor: ${divBoxesNewRef.style.backgroundColor})`;
    
    divBoxesNewRef.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divBoxesNewRef);
  }

  divBoxesRef.appendChild(fragment);
 
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// ------------------------------------------------------------------


// перебрать? for (let i)
// дать переменную размеру как в задаче№3
// amount-число
// привязать к amount количество див



// elem.insertAdjacentElement(where, newElem) 
// var fragment = document.createDocumentFragment()- добавляет несколько елем;
// elem.style.cssText = `width: ${size}px; height: ${size}px)`;
// --------------------------------------------------------------------------------

// btnCreateRef.addEventListener('click', createBoxes);
// btnDestroyRef.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {

//   let divBoxesNewRef = document.createElement('div');
//   divBoxesNewRef.style.cssText = 'height:30px;width:30px';
//   divBoxesNewRef.style.backgroundColor = getRandomHexColor();

// divBoxesRef.appendChild(divBoxesNewRef);}

// function destroyBoxes() {
//   divBoxesRef.innerHTML = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// -------------------------------------------------------------------------------------