const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N, C] = input[0].split(' ').map(Number);
const houses = input.slice(1).map(Number).sort((a, b) => a - b);

let left = 1; // 최소 거리
let right = houses[houses.length - 1] - houses[0]; // 최대 거리
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2); // 설치 거리
  let count = 1; // 첫 집에 설치
  let lastPos = houses[0];

  for (let i = 1; i < N; i++) {
    if (houses[i] - lastPos >= mid) {
      count++;
      lastPos = houses[i];
    }
  }

  if (count >= C) { 
    // 더 크게 가능
    answer = mid;
    left = mid + 1;
  } else { 
    // 너무 멀리 둔 경우 -> 거리 줄이기
    right = mid - 1;
  }
}

console.log(answer);