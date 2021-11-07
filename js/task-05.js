const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', onInput);

function onInput (event) {
 spanEl.textContent = event.currentTarget.value;
       
};