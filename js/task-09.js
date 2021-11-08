const bodyEl = document.body;
const colorEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');



function getRandomHexColor (){
    bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colorEl.style.color = bodyEl.style.backgroundColor;
}

buttonEl.addEventListener("click",  getRandomHexColor);
