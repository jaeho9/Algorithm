const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = +input[0];
const max = 100;
const dp = Array(max + 1).fill(0);
dp[1] = dp[2] = dp[3] = 1;

for (let i = 4; i <= max; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
}

let result = '';
for (let i = 1; i <= T; i++) {
    const N = +input[i];
    result += dp[N] + '\n';
}
console.log(result);