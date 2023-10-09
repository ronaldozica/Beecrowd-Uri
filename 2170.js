var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let projectCount = 0;
let currentIndex = 0;

while (currentIndex < lines.length) {
    const [initialInvestment, finalReturns] = lines[currentIndex].split(' ').map(Number);
    
    if (!initialInvestment || !finalReturns) {
        break;
    }
    
    let interest = finalReturns - initialInvestment;
    interest = (interest * 100) / initialInvestment;

    console.log(`Projeto ${++projectCount}:`);
    console.log(`Percentual dos juros da aplicacao: ${interest.toFixed(2)} %\n`);

    currentIndex++;
}