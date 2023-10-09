var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.forEach(line => {
    const values = line.split(' ');
    if (values.length === 3) {
        const speedRunner = parseInt(values[1], 10);
        const timeRunner = 12 / speedRunner;
    
        const distanceFromRunner = parseInt(values[0], 10);
        const totalDistance = Math.sqrt(Math.pow(distanceFromRunner, 2) + Math.pow(12, 2))
    
        const speedGuard = parseInt(values[2], 10);
        const timeGuard = totalDistance / speedGuard;
    
        console.log(timeGuard <= timeRunner ? 'S' : 'N')
    }
});
