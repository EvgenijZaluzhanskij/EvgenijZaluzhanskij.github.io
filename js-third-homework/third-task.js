const io = require('console-read-write');


async function main() {
    let arraysCount, numbersCount

    io.write('Input numbersCount')
    numbersCount = await io.read()

    io.write('Input arraysCount')
    arraysCount = await io.read()

    io.write(generate(numbersCount, arraysCount))
}


function generate(numbersCount, arraysCount) {
    result = []
    for (let i = 0; i < arraysCount; i++) {
        result.push(generateArrayWithNumbers(numbersCount))
    }
    return result
}

function generateArrayWithNumbers(numbersCount) {
    let result = []
    for (let i = 1; i <= numbersCount; i++) {
        result.push(i)
    }
    return result
}

main()