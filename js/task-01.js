const categoriesEl = document.querySelector('#categories')
console.log(categoriesEl);


const liEl = document.querySelectorAll('.item');
console.log('Number of categories:' , liEl.length);

liEl.forEach((liItem) => {
console.log('Category:' , liItem.firstElementChild.textContent);

console.log('Elements' , liItem.lastElementChild.children.length);
})
