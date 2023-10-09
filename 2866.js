var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let C = parseInt(lines[0], 10);
let currentIteration = 1;

while (C > 0) {
    const currentText = lines[currentIteration];
    let decodedText = '', i = currentText.length - 1;

    while (i >= 0) {
        if (currentText.charCodeAt(i) >= 97 && currentText.charCodeAt(i) <= 122) {
            decodedText += currentText[i];
        }
        i--;
    }

    C--;
    currentIteration++;
    console.log(decodedText);
}