var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.forEach(line => {
  const time = parseInt(line, 0);
  
  if ((time >= 0 && time < 90) || time === 360) {
    console.log("Bom Dia!!");
  }

  if (time >= 90 && time < 180) {
    console.log("Boa Tarde!!");
  }

  if (time >= 180 && time < 270) {
    console.log("Boa Noite!!");
  }

  if (time >= 270 && time < 360) {
    console.log("De Madrugada!!");
  }
});