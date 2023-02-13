const formEl = document.querySelector('.login-form')
console.log(formEl)

const inputEmail = formEl.querySelector("input[name='email']");
const inputPassword = formEl.querySelector("input[name='password']");
const buttonSubmit = formEl.lastElementChild

console.log(inputEmail)
console.log(inputPassword)
console.log(buttonSubmit)

// перший варіант 1

formEl.addEventListener('submit' , submitFn)

function submitFn (event) {
    event.preventDefault ();

    const data = {};
    const  formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => (data[name] = value));

    if( data.email === "" || data.password === ""){
        alert("Bсі поля повинні бути заповнені!")
        return
    }
    formEl.reset();

    console.log(data)
}


// другий варіант 2

// formEl.addEventListener('submit' , (event) => {
//     event.preventDefault ();

//     const {
//     elements: { email, password} , 
//     } = event.currentTarget;

//     console.log(email.value)
//     console.log(password.value)

//     if(email.value === "" || password.value === ""){
//         alert("Bсі поля повинні бути заповнені!")
//     }
// })
