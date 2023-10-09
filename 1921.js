var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines[0], 10);
console.log((n * (n - 3)) / 2);