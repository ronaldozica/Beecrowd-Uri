var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0;
while (true) {
  const line = lines[i++];
  const [x1, y1, x2, y2] = line.split(" ");
  if (x1 === "0" && x2 === "0" && y1 === "0" && y2 === "0") {
    break;
  } 
  
  if (x1 === x2 && y1 === y2) {
    console.log(0);
  } else {
    if ((x1 === x2 || y1 === y2) || (Math.abs(x1 - x2) === Math.abs(y1 - y2))) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
}