const fs = require("fs");

// 입력 받기
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const N = Number(input[0]);
const schedule = input.slice(1).map((line) => line.split(" ").map(Number));

let dp = new Array(N + 1).fill(0);

for (let i = N - 1; i >= 0; i--) {
  let time = schedule[i][0];
  let profit = schedule[i][1];

  if (i + time <= N) {
    dp[i] = Math.max(dp[i + 1], profit + dp[i + time]);
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(dp[0]);
