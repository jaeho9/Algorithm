const fs = require('fs');
const raw = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let p = 0;
const R = raw[p++], C = raw[p++], T = raw[p++];
let A = Array.from({ length: R }, () => Array(C));

let cleaners = [];
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    A[i][j] = raw[p++];
    if (A[i][j] === -1) cleaners.push(i); // 항상 첫 열에 위/아래 연속 두 칸
  }
}
const up = cleaners[0], down = cleaners[1];

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];

function spread() {
  const B = Array.from({ length: R }, () => Array(C).fill(0));
  B[up][0] = B[down][0] = -1;

  for (let y = 0; y < R; y++) {
    for (let x = 0; x < C; x++) {
      if (A[y][x] <= 0) continue;
      const v = A[y][x];
      const add = Math.floor(v / 5);
      if (add > 0) {
        let cnt = 0;
        for (let k = 0; k < 4; k++) {
          const ny = y + dy[k], nx = x + dx[k];
          if (ny < 0 || ny >= R || nx < 0 || nx >= C) continue;
          if (A[ny][nx] === -1) continue;
          B[ny][nx] += add;
          cnt++;
        }
        B[y][x] += v - add * cnt;
      } else {
        B[y][x] += v; // 확산 못함
      }
    }
  }
  A = B;
}

function purify() {
  // 위쪽(반시계)
  for (let i = up - 1; i >= 1; i--) A[i][0] = A[i - 1][0];
  for (let j = 0; j <= C - 2; j++) A[0][j] = A[0][j + 1];
  for (let i = 0; i <= up - 1; i++) A[i][C - 1] = A[i + 1][C - 1];
  for (let j = C - 1; j >= 2; j--) A[up][j] = A[up][j - 1];
  A[up][1] = 0;

  // 아래쪽(시계)
  for (let i = down + 1; i <= R - 2; i++) A[i][0] = A[i + 1][0];
  for (let j = 0; j <= C - 2; j++) A[R - 1][j] = A[R - 1][j + 1];
  for (let i = R - 1; i >= down + 1; i--) A[i][C - 1] = A[i - 1][C - 1];
  for (let j = C - 1; j >= 2; j--) A[down][j] = A[down][j - 1];
  A[down][1] = 0;

  // 공기청정기 위치 유지
  A[up][0] = -1; A[down][0] = -1;
}

for (let t = 0; t < T; t++) {
  spread();
  purify();
}

let sum = 0;
for (let y = 0; y < R; y++) {
  for (let x = 0; x < C; x++) {
    if (A[y][x] > 0) sum += A[y][x]; // -1은 제외
  }
}
console.log(sum);