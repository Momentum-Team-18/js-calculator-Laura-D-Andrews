
// definitions

let buttonClear = document.querySelector('#buttonClear')


let buttons = document.querySelectorAll(".button")


let buttonEqual = document.querySelector("#buttonEq")


let displayScreen = document.querySelector('#display')

let calculate = function(formula) {
    let result = eval(formula)
    displayScreen.value = result
}
// event listeners 

buttonClear.addEventListener("click", (event) => {
    displayScreen.value = "" //empty string to clear
})

buttonEqual.addEventListener("click", (event) => {
    console.log(event.target.innerText)
    calculate(displayScreen.value)
})

for (let button of buttons){
    button.addEventListener('click', (event) => {
        displayScreen.value+=button.innerText // displayScreen.value = '', so here '' = + button.innerText
    })
}

// function

// declaring a parameter in the future so you can give it an input and it'll give you an output


