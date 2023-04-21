
let displayScreen = document.querySelector('#display')
console.log(displayScreen)

let buttonClear = document.querySelector('#buttonClear')
console.log(buttonClear)

let buttons = document.querySelectorAll(".button")
console.log(buttons)

let buttonEqual = document.querySelector("#buttonEq")
console.log(buttonEqual)

gridCard.addEventListener('click', (event) => {
    let newDisplay = document.createTextNode(${event}) 

    console.log(${event});
})


buttonClear.addEventListener("click", (event) => {
    console.log(event.target.innerText); 
    displayScreen.innerText = event.target.innerText; 
})
// displays in console

for (let button of buttons) {
    button.addEventListener("click", (event) => {
        console.log(event.target.innerText); 
        displayScreen.innerText = event.target.innerText;
    })
}
// displays in console 

buttonEqual.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    displayScreen.innerText = event.target.innerText; 
})
// displays in console