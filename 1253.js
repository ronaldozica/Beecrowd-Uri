var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let currentIteration = 0, currentIndex = 1;
const iterations = parseInt(lines[0], 10);

while (currentIteration < iterations) {
    currentIteration++;

    const originalText = lines[currentIndex++];
    const offsetChar = parseInt(lines[currentIndex++], 10);
    let newStr = "";

    for (const letter of originalText) {
        let shiftedCharCode = letter.charCodeAt(0) - offsetChar;
        if (shiftedCharCode < 'A'.charCodeAt(0)) {
            shiftedCharCode += 26;
        }

        newStr += String.fromCharCode(shiftedCharCode);
    }

    console.log(newStr)
}
