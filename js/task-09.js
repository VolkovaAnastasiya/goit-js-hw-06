const colorEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener("click",  getRandomHexColor);


function getRandomHexColor() {
    return colorEl.style.color =  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};