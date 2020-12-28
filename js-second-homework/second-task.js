const io = require('console-read-write');


function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (Number(number) % i === 0) {
            return false
        }
    }
    return true
}

function findPrimeNumbersBeforeNumber(number) {
    let result = []

    for (let i = 2; i < Number(number); i++) {
        if (isPrime(i)) {
            result.push(String(i))
        }
    }

    return result.join(', ')  
}


async function main() {
    let inputValue

    io.write('Input your number')
    inputValue = await io.read()
    io.write(findPrimeNumbersBeforeNumber(inputValue))
}

main()