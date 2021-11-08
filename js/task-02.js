const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul#ingredients');
ingredients.map(el => {
   const ingredientsNewEl = document.createElement('li');
  ingredientsNewEl.textContent = el;
  ingredientsNewEl.classList.add('item');
 
  ingredientsEl.append(ingredientsNewEl);
});

console.log(ingredientsEl);
