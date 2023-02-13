

const btnChangeColor = document.querySelector('.change-color');
console.log(btnChangeColor);

const body = document.querySelector('body');
console.log(body);


const colorEl = document.querySelector('.color');
console.log(colorEl)

btnChangeColor.addEventListener('click' , (event) => {


body.style.backgroundColor = getRandomHexColor();

colorEl.textContent = body.style.backgroundColor;

console.log('test change color');
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}