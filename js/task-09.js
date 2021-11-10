const bodyEl = document.body;
const inputEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');



function getRandomHexColor (){
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonEl.addEventListener("click", () => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    inputEl.textContent= bodyEl.style.backgroundColor;
});
