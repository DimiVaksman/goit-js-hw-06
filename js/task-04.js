
const counterValueArr = [0];
let counterValue = 0;



const divEl = document.querySelector('#counter')
console.log(divEl)



const btnDecrementEl = divEl.firstElementChild
console.log(btnDecrementEl)

const decrementFn = () => {

    counterValueArr.forEach((element) => {
        console.log({ element });
        counterValue--;
      });
      console.log({ counterValue });
      const resultatEl = document.querySelector("#value");
      resultatEl.textContent = counterValue;
      console.log(resultatEl)
}
btnDecrementEl.addEventListener('click' , decrementFn )




const btnIncrementEl = divEl.lastElementChild
console.log(btnIncrementEl)

const incrementFn = () => {

    counterValueArr.forEach((element) => {
        console.log({ element });
        counterValue++;
      });
      console.log({ counterValue });
      const resultatEl = document.querySelector("#value");
      resultatEl.textContent = counterValue;
      console.log(resultatEl)
}
btnIncrementEl.addEventListener('click' , incrementFn)


