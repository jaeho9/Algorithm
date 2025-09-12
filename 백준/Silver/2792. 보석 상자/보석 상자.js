const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const N = input[idx++]; 
const M = input[idx++]; 
const jewels = input.slice(idx, idx + M);
idx += M;

let left = 1;
let right = Math.max(...jewels);
let answer = right;

function canDistribute(limit) {
  let cnt = 0;
  for (let x of jewels) {
    cnt += Math.ceil(x / limit);
    if (cnt > N) return false; 
  }
  return cnt <= N;
}

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  if (canDistribute(mid)) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);