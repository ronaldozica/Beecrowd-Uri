var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const N = parseInt(lines[0], 10);
console.log(((N+1)*(N+2))/2);