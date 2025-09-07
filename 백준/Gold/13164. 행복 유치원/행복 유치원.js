const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let p = 0;
const N = data[p++], K = data[p++];

const H = data.slice(p, p + N).sort((a, b) => a - b);

// 인접 차이 계산
const diffs = new Array(N - 1);
let total = 0;
for (let i = 0; i < N - 1; i++) {
  const d = H[i + 1] - H[i];
  diffs[i] = d;
  total += d;
}

// 가장 큰 K-1개 차이 합산
diffs.sort((a, b) => b - a);
let cut = 0;
for (let i = 0; i < K - 1 && i < diffs.length; i++) {
  cut += diffs[i];
}

const answer = total - cut;
console.log(String(answer));