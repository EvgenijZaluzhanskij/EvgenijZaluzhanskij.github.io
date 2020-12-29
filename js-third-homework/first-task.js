const io = require('console-read-write');


async function main() {
    let inputValue

    io.write('Input your string')
    inputValue = await io.read()
    io.write(revertString(inputValue))
}


function revertString(word) {
    let result = ''
    for (let i = word.length - 1; i >= 0; --i) {
        result += word[i]
    }

    return result
}

main()