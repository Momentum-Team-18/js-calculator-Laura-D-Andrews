
// definitions

let buttonClear = document.querySelector('#buttonClear')


let buttons = document.querySelectorAll(".button")


let buttonEqual = document.querySelector("#buttonEq")


let displayScreen = document.querySelector('#display')

let mathProblem = ''


// event listeners 

buttonClear.addEventListener("click", (event) => {
    displayScreen.value = ''
    console.log(displayScreen.value)
})

for (let button of buttons){
    button.addEventListener('click', (event) => {
        displayScreen.value+=button.innerText
        console.log(button.innerText)
    })
}
buttonEqual.addEventListener("click", (event) => {
    console.log(event.target.innerText)
    let answer = math.evaluate(displayScreen.value) 
    console.log(answer)
    displayScreen.value = answer
}) 




