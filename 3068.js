var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0, iteration = 1;
while (true) {
    const [X1, Y1, X2, Y2] = lines[i++].split(" ").map(n => parseInt(n, 10));
    if (X1 === 0 && Y1 === 0 && X2 === 0 && Y2 === 0) {
        break;
    }

    const x1 = Math.min(X1, X2);
    const x2 = Math.max(X1, X2);

    const y1 = Math.min(Y1, Y2);
    const y2 = Math.max(Y1, Y2);

    let hits = 0;
    const amountOfMeteors = parseInt(lines[i++], 10);
    for (let it = 0; it < amountOfMeteors; it ++) {
        const [x, y] = lines[i++].split(" ").map(n => parseInt(n, 10));
        if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
            hits ++;
        }
    }
    console.log(`Teste ${iteration++}`);
    console.log(hits);
}