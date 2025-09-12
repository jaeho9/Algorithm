const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const N = input[idx++];
const M = input[idx++]; 
const spend = input.slice(idx, idx + N);
idx += N;

let left = Math.max(...spend); 
let right = spend.reduce((a, b) => a + b, 0); 
let answer = right;

function canWithdraw(limit) {
  let cnt = 1; 
  let money = limit;

  for (let x of spend) {
    if (money < x) { 
      cnt++;
      money = limit;
    }
    money -= x;
  }
  return cnt <= M;
}

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  if (canWithdraw(mid)) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);