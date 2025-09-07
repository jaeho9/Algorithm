const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const T = input[idx++];

let out = [];
for (let t = 0; t < T; t++) {
  const n = input[idx++];
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    const doc = input[idx++];   // 서류 순위
    const intr = input[idx++];  // 면접 순위
    arr[i] = [doc, intr];
  }

  // 오름차순 정렬
  arr.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let minInterview = Infinity;

  for (let i = 0; i < n; i++) {
    const interview = arr[i][1];
    if (interview < minInterview) {
      count++;
      minInterview = interview;
    }
  }

  out.push(String(count));
}

console.log(out.join('\n'));