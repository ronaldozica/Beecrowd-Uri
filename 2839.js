var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = parseInt(lines[0], 10);
console.log(line + 1);