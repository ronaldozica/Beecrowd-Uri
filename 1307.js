var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let currentIteration = 0, currentIndex = 1;
const numberOfIterations = parseInt(lines[0]);

while (currentIteration < numberOfIterations) {
    currentIteration++;

    let S1 = parseInt(lines[currentIndex++], 2);
    let S2 = parseInt(lines[currentIndex++], 2);
    
    while (S2 !== 0) {
        const temp = S2;
        S2 = S1 % S2;
        S1 = temp;
    }
    const result = S1;

    if (result === 1) {
        console.log(`Pair #${currentIteration}: Love is not all you need!`);
    } else {
        console.log(`Pair #${currentIteration}: All you need is love!`);
    }
}