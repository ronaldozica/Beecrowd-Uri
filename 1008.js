var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines[0], 10);
console.log("NUMBER = " + number);

const hours = parseInt(lines[1], 10);
const salaryPerHour = parseFloat(lines[2], 10);
const salary = hours * salaryPerHour;

console.log("SALARY = U$ " + salary.toFixed(2));