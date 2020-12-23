const maxAvailableLength = 10

const inputField = document.querySelector(".firstTask__input")
const button     = document.querySelector(".firstTask__button")

const answersMap = new Map()

answersMap.set(true, "Correct length")
answersMap.set(false, "String is too long")

let inputValue

button.addEventListener('click', () => {console.log(firstTask())})

function getString() {
    inputValue = inputField.value
}

function checkLength() { 
    return inputValue.length < maxAvailableLength
}

function firstTask() {
    getString()

    if (inputValue.length == 0) {
        alert("Input value is empty")
        return
    }

    return answersMap.get(checkLength())
}