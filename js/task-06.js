const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onCheck);

function onCheck(event){
    if (Number(inputEl.dataset.length) === event.currentTarget.value.length ) {
        inputEl.classList.remove('invalid');
     return inputEl.classList.add('valid')
    }
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
   
}


// console.log(inputEl.value.length === 6);
// console.log(inputEl.dataset.length === 6);
// console.log(Number(inputEl.dataset.length) === 6);
