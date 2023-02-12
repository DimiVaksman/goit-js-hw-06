const inputControlEl = document.querySelector('#font-size-control');
console.log(inputControlEl);

const textEl = document.querySelector('#text');
console.log(textEl);


inputControlEl.addEventListener('input' , inputChange)


function inputChange(event){
    console.log('event')
    textEl.style.fontSize = inputControlEl.value + 'px' 
}

