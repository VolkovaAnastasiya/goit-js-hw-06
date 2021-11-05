const colorEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');


const getRandomHexColor = () => {
 return colorEl.style.color =  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonEl.addEventListener("click",  getRandomHexColor);










// const bodyEl = document.body;
// const buttonEl = document.querySelector('.change-color')



// const getRandomHexColor = () => {
//  return bodyEl.style.backgroundColor =  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// buttonEl.addEventListener("click",  getRandomHexColor);
