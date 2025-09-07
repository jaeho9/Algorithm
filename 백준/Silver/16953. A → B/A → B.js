const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(BigInt);
const [A, Binit] = input;

let B = Binit;
let ops = 0n;

while (B > A) {
  if (B % 10n === 1n) {
    B = (B - 1n) / 10n;
    ops++;
  } else if (B % 2n === 0n) {
    B /= 2n;
    ops++;
  } else {
    break;
  }
}

const ans = (B === A) ? (ops + 1n) : (-1n);
console.log(ans.toString());