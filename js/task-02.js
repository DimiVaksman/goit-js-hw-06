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


const ingrArr = ingredients.map(ingredientsItem => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredientsItem;
  liEl.classList.add('item');

  return liEl;
})



ingredientsEl.append(...ingrArr);
