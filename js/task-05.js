const inputText = document.querySelector('#name-input');
console.log(inputText)



const outputText = document.querySelector('#name-output');
console.log(outputText)


inputText.addEventListener('input' , (event) => {
    
    if(!event.currentTarget.value == "") {
        outputText.textContent = event.currentTarget.value;
    }
    else{
        outputText.textContent = "Anonymous";
    }
})

