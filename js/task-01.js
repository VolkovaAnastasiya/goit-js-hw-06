const categoriesEl = document.querySelectorAll('ul#categories .item');
console.log(`Number of categories : ${categoriesEl.length}`);

const itemEl = [];

categoriesEl.forEach(el => {

  itemEl.push(`Category: ${el.querySelector('h2').textContent} Elements: ${el.querySelectorAll('.item > ul > li').length}`) 
  
})

console.log(...itemEl);