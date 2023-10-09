var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const B = parseInt(lines[0], 10);
const T = parseInt(lines[1], 10);

const heigth = 70;
const totalArea = 70 * 160;
const area1 = (T + B) * heigth / 2;
const area2 = totalArea - area1;

if (area1 > area2) {
    console.log(1);
} else if (area1 < area2) {
    console.log(2);
} else {
    console.log(0);
}