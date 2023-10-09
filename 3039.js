var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const iterations = parseInt(lines[0], 10);
let boys = 0, girls = 0;
for (let i = 0; i < iterations; i ++) {
  const [name, gender] = lines[i + 1].split(" ");
  if (gender === "F") {
    girls ++;
  } else {
    boys ++;
  }
}
console.log(`${boys} carrinhos`);
console.log(`${girls} bonecas`);