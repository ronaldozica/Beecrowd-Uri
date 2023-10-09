var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let cicles, consecutiveReads, it = 0;
let text = '', value = '';

while (true) {
    cicles = 0, consecutiveReads = 0;

    text = lines[it];
    it ++;

    if (!text || text === "EOF") {
        break;
    }

    value = parseInt(lines[it], 10);
    it ++;

    if (value === undefined || value === "EOF") {
        break;
    }

    for (const letter of text) {
        if (letter.charCodeAt(0) === "W".charCodeAt(0)) {
            cicles++;

            if (consecutiveReads > 0) {
                cicles ++;
                consecutiveReads = 0;
            }
        } else if (letter.charCodeAt(0) === "R".charCodeAt(0)) {
            consecutiveReads++;

            if (consecutiveReads === value) {
                consecutiveReads = 0;
                cicles++;
            }
        }
    }

    if (consecutiveReads > 0) {
        cicles++;
        consecutiveReads = 0;
    }

    console.log(cicles)
}