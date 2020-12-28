const io = require('console-read-write');

const fizz = 'Fizz'
const buzz = 'Buzz'


function isDivideOnlyThree(number) {
    return (number % 3 === 0) && (number % 5 !== 0)
}

function isDivideOnlyFive(number) {
    return (number % 3 !== 0) && (number % 5 === 0)
}

function isDivideThreeAndFive(number) {
    return (number % 3 === 0) && (number % 5 === 0)
}

function fizzBuzz(inputValue) {
    let result = []

    for (let i = 1; i <= Number(inputValue); i++) {
        if (isDivideOnlyThree(i)) {
            result.push(fizz)
            continue
        }
        if (isDivideOnlyFive(i)) {
            result.push(buzz)
            continue
        }
        if (isDivideThreeAndFive(i)) {
            result.push(fizz + ' ' + buzz)
            continue
        }
        result.push(String(i))
    }

    return result.join(', ')
}

async function main() {
    let inputValue

    io.write('Input your number')
    inputValue = await io.read()
    io.write(fizzBuzz(inputValue))
}

main()