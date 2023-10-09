var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.141592654;
for (const line of lines) {
    const [angle, distance, elfHeight] = line.split(' ').map(Number);

    if (!angle || !distance || !elfHeight) {
        break;
    }

    const radians = (angle * PI) / 180;
    const treeHeight = (distance * Math.tan(radians)) + elfHeight;
    const lightsNeeded = (treeHeight * 5).toFixed(2);
    console.log(lightsNeeded);
}