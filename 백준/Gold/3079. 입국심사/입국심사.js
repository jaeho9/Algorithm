const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(BigInt);

let idx = 0;
const M = Number(input[idx++]); 
const N = input[idx++];         
const times = input.slice(idx, idx + M);

let left = 1n;
let right = times.reduce((a, b) => (a > b ? a : b), 0n) * N; 
let answer = right;

function canProcess(limit) {
  let cnt = 0n;
  for (let t of times) {
    cnt += limit / t;
    if (cnt >= N) return true;
  }
  return cnt >= N;
}

while (left <= right) {
  let mid = (left + right) >> 1n;
  if (canProcess(mid)) {
    answer = mid;
    right = mid - 1n;
  } else {
    left = mid + 1n;
  }
}

console.log(answer.toString());
