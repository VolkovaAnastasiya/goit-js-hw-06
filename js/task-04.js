let counterValue = 0;
let step = 1;

const valueEl = document.querySelector('span#value');
const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');

buttonDecrementEl.addEventListener("click", () => {counterValue -= step; valueEl.innerHTML = counterValue});
buttonIncrementEl.addEventListener("click", () => {counterValue += step;   valueEl.innerHTML = counterValue;});

