const input = document.querySelector('.inputNumber')
const button = document.querySelector('.button')
const maxNumberValue = 21
const maxRetries = 5

let currentTry = 0

const secretNumber = Math.floor(Math.random() * Math.floor(maxNumberValue));

button.addEventListener('click', () => {alert(checkInputNumber())})

console.log(secretNumber)

function checkInputNumber() {
    if (currentTry >= maxRetries) {
        return "Tries end! Number was: " + secretNumber
    }
    currentTry++

    const inputValue = input.value

    return Number(inputValue) === secretNumber
}
