const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const [N, M] = [input[idx++], input[idx++]];
const points = input.slice(idx, idx + N).sort((a, b) => a - b);
idx += N;

function lowerBound(arr, target) {
  let l = 0, r = arr.length;
  while (l < r) {
    let mid = (l + r) >> 1;
    if (arr[mid] >= target) r = mid;
    else l = mid + 1;
  }
  return l;
}

function upperBound(arr, target) {
  let l = 0, r = arr.length;
  while (l < r) {
    let mid = (l + r) >> 1;
    if (arr[mid] > target) r = mid;
    else l = mid + 1;
  }
  return l;
}

let result = [];
for (let i = 0; i < M; i++) {
  const a = input[idx++], b = input[idx++];
  const left = lowerBound(points, a);
  const right = upperBound(points, b);
  result.push(right - left);
}

console.log(result.join('\n'));
