const maxLength = 20

const firstInput        = document.querySelector(".secondTask_firstInput")
const secondInput       = document.querySelector(".secondTask_secondInput")
const concatenateButton = document.querySelector(".secondTask__button")

let firstString, secondString, result

concatenateButton.addEventListener('click', () => {console.log(secondTask())})

function getStrings() {
    firstString = firstInput.value
    secondString = secondInput.value
}

function concatenateStrings() {
    return `${firstString}${secondString}`
}

function secondTask() {
    getStrings()

    if (firstString.length == 0 && secondString.length == 0) {
        alert("Both strings are empty")
        return
    }

    result = concatenateStrings()
    if (result.length > maxLength) {
        result = result.substring(0, maxLength) + "..."
    }

    return result
}