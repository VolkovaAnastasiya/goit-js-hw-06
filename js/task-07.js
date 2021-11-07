const inputRef = document.querySelector('input#font-size-control');
const spanRef = document.querySelector('span#text');

inputRef.addEventListener('input', onSizeMove);

function onSizeMove(event){
    spanRef.style.fontSize = event.currentTarget.value + 'px'
};