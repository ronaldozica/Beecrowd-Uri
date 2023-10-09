var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let currentIteration = 0;
const iterations = parseInt(lines[0], 10);
const reverseString = (i) => i.split('').reverse().join('');

while (currentIteration < iterations) {
  currentIteration++
  const originalText = lines[currentIteration];

  const middleIndex = Math.floor(originalText.length / 2);
  const firstHalfReversed = reverseString(originalText.slice(0, middleIndex));
  const secondHalfReversed = reverseString(originalText.slice(middleIndex));
  console.log(firstHalfReversed + secondHalfReversed);
}
