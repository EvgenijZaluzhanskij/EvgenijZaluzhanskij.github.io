const io = require('console-read-write');

const encryptMap = "NOPQRSTUVWXYZABCDEFGHIJKLM      nopqrstuvwxyzabcdefghijklm"


async function main() {
    let inputValue

    io.write('Input your string')
    inputValue = await io.read()
    io.write(rot13(inputValue))
}

function rot13(words) {
    let result = ''
    for (let i = 0; i < words.length; i++) {
        if (!isLetter(words[i])) {
            result += words[i]
            continue
        }

        result += encryptMap[words[i].charCodeAt(0) - 'A'.charCodeAt(0)]
    }

    return result
}

function isLetter(symbol) {
    const symbolCode = symbol.toLowerCase().charCodeAt(0)
    return symbolCode >= 'a'.charCodeAt(0) && symbolCode <= 'z'.charCodeAt(0)
}

main()