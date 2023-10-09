var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0, iteration = 1;
while(true) {
  const numbers = parseInt(lines[i++], 10);
  if (!numbers) {
    break;
  }
  console.log(`Teste ${iteration++}`);
  console.log(eval(lines[i++]));
  console.log();
}