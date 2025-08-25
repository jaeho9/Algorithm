const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = parseInt(input[0]);
const x = input[1].split(" ").map(Number);

let totalSum = 0;
for (let i = 0; i < n; i++) {
  totalSum += x[i];
}

let result = 0;
for (let i = 0; i < n; i++) {
  totalSum -= x[i];
  result += x[i] * totalSum;
}

console.log(result);
