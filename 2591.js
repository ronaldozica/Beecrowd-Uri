var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let C = parseInt(lines[0], 10);
let iterator = 1;

while (iterator <= C) {
    const parts = lines[iterator].split('me');
    const aCount = parts[0].split('a').length - 1;
    const aCountInSecondPart = parts[1].split('a').length - 1;
    const aRepeated = 'a'.repeat(aCount * aCountInSecondPart);
    const ending = `k${aRepeated}`;
    console.log(ending);
    iterator++;
}