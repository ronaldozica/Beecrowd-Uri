var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let iterations, i = 0;
let current, before, after;
while (true) {
  iterations = parseInt(lines[i++], 10);
  if (!iterations) {
    break;
  }

  const line = lines[i++];
  const split = line.split(" ");
  let peakCount = 0;

  for (let cont = 0; cont < iterations; cont ++) {
    if (cont !== 0 && cont !== iterations - 1) {
      current = parseInt(split[cont], 10);
      before = parseInt(split[cont - 1], 10);
      after = parseInt(split[cont + 1], 10);
      if (current > before && current > after) {
        peakCount ++;
      } else if (current < before && current < after) {
        peakCount ++;
      }
    }
  }
  
  current = parseInt(split[0], 10);
  before = parseInt(split[iterations - 1], 10);
  after = parseInt(split[1], 10);

  if (current > before && current > after) {
    peakCount ++;
  } else if (current < before && current < after) {
    peakCount ++;
  }

  current = parseInt(split[iterations - 1], 10);
  before = parseInt(split[iterations - 2], 10);
  after = parseInt(split[0], 10);
  
  if (current > before && current > after) {
    peakCount ++;
  } else if (current < before && current < after) {
    peakCount ++;
  }

  console.log(peakCount);
}