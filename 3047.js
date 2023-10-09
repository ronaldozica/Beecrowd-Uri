var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const monica = parseInt(lines[0], 10);
const firstSon = parseInt(lines[1], 10);
const secondSon = parseInt(lines[2], 10);
const thirdSon = monica - firstSon - secondSon;
console.log(Math.max(firstSon, secondSon, thirdSon));