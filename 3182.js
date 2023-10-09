var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let index = 0, currentIteration = 0, minCost = Infinity;
const [participants, budget, numHotels, numWeeks] = lines[index++].split(" ").map(Number);

while (currentIteration < numHotels) {
    const pricePerPerson = parseInt(lines[index++]);
    const availableBeds = lines[index++].split(" ").map(Number).sort((a, b) => a - b);
    const totalCost = pricePerPerson * participants;

    let bedIndex = 0;
    let foundSuitableBed = false;
    while (bedIndex < availableBeds.length && !foundSuitableBed) {
        if (availableBeds[bedIndex] >= participants) {
            foundSuitableBed = true;
        }
        bedIndex++;
    }

    if (totalCost <= budget && totalCost <= minCost && foundSuitableBed) {
        minCost = totalCost;
    }

    currentIteration++;
}

if (minCost !== Infinity) {
    console.log(minCost);
} else {
    console.log("stay home");
}