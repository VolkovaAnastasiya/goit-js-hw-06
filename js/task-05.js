const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
   
    spanEl.textContent = event.currentTarget.value;
    
     if (spanEl.textContent === '') {
        spanEl.textContent = 'Anonymous'
    }
       
};