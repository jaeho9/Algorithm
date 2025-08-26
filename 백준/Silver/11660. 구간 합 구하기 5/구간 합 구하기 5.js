const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = fs.readFileSync("example.txt").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const prefixSum = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    prefixSum[i][j] =
      arr[i - 1][j - 1] +
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1];
  }
}

let result = "";
for (let i = n + 1; i < n + m + 1; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  const sum =
    prefixSum[x2][y2] -
    prefixSum[x1 - 1][y2] -
    prefixSum[x2][y1 - 1] +
    prefixSum[x1 - 1][y1 - 1];
  result += sum + "\n";
}

console.log(result);
