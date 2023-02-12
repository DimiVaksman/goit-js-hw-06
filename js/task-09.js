

const btnChangeColor = document.querySelector('.change-color');
console.log(btnChangeColor)

const body = document.querySelector('body')
console.log(body)


btnChangeColor.addEventListener('click' , (event) => {



body.style.backgroundColor = getRandomHexColor()

console.log('test change color');
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}