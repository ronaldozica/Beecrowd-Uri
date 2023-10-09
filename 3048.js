var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = parseInt(lines[0], 10);
let selected = 0, lastSelected = "";

for (let i = 1; i <= numbers; i ++) {
    const current = lines[i];
    if (current !== lastSelected) {
        selected ++;
        lastSelected = current;
    }
}

console.log(selected);