var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let lineIndex = 0;
while (lineIndex < lines.length) {
    const [n, m] = lines[lineIndex++].split(' ').map(Number);

    if (n === 0 && m === 0) {
        break;
    }

    const textMatrix = [];
    for (let i = 0; i < n; i++) {
        const row = lines[lineIndex++];
        textMatrix.push(row);
    }

    const [a, b] = lines[lineIndex++].split(' ').map(Number);
    const aRatio = Math.floor(a / n);
    const bRatio = Math.floor(b / m);

    for (const row of textMatrix) {
        let resizedRow = '';
        for (const char of row) {
            resizedRow += char.repeat(bRatio);
        }
        for (let i = 0; i < aRatio; i++) {
            console.log(resizedRow);
        }
    }
    console.log();
}