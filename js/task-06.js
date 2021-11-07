const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onCheck);

function onCheck(){
    if(this.value.length === 6){
     return inputEl.classList.add('valid')
    }
    inputEl.classList.add('invalid')
}