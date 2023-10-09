var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let prefix = '', suffix = '', digits = '', decoded = '';
let multiplier, offset, currentLine = 0;
const currentText = [];

for (let i = 0; i < lines.length; i++) {
    currentText.push(lines[i]);
}

while (currentLine < 4) {
    prefix += currentText[currentLine][0];
    suffix += currentText[currentLine][currentText[currentLine].length - 1];
    currentLine++;
}

offset = parseInt(suffix, 10);
multiplier = parseInt(prefix, 10);

for (let i = 1; i < currentText[0].length - 1; i++) {
    digits = '';
    for (let j = 0; j < 4; j++) {
        digits += currentText[j][i];
    }
    decoded += String.fromCharCode((multiplier * parseInt(digits, 10) + offset) % 257);
}

console.log(decoded);