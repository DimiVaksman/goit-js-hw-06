const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);


ingredients.forEach((ingredientsItem) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredientsItem;
  liEl.classList = 'item';
  ingredientsEl.append(liEl);
  
  console.log(liEl)
})

