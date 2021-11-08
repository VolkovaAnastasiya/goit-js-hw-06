const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onCheck);

function onCheck(event){
    if(this.value.length === inputEl.getAttribute('data-length')){
     return inputEl.classList.add('valid')
    }
    inputEl.classList.add('invalid')
}