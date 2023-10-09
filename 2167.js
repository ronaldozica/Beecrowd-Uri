var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const iterations = parseInt(lines[0], 10);

if (iterations) {
  const measurements = lines[1].split(" ");
  let lastMeasurement, currentMeasurement, hasPrinted = false;
  for (let i = 0; i < iterations; i ++) {
    currentMeasurement = parseInt(measurements[i], 10);
    if ((lastMeasurement || lastMeasurement === 0) && lastMeasurement > currentMeasurement) {
      console.log(i + 1);
      hasPrinted = true;
      break;
    }
    lastMeasurement = parseInt(measurements[i], 10);
  }

  if (!hasPrinted) {
    console.log(0);
  }
}