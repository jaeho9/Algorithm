const fs = require('fs');
const tokens = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const M = tokens[idx++]; // 가로(열)
const N = tokens[idx++]; // 세로(행)

const board = Array.from({ length: N }, () => Array(M));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    board[i][j] = tokens[idx++];
  }
}

const dist = Array.from({ length: N }, () => Array(M).fill(-1));
const q = [];
let qh = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 1) {
      dist[i][j] = 0;
      q.push([i, j]);
    }
  }
}

const dirs = [
  [1, 0], [-1, 0], [0, 1], [0, -1]
];

// BFS
while (qh < q.length) {
  const [y, x] = q[qh++];
  for (const [dy, dx] of dirs) {
    const ny = y + dy, nx = x + dx;
    if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
    if (board[ny][nx] === 0 && dist[ny][nx] === -1) {
      dist[ny][nx] = dist[y][x] + 1;
      board[ny][nx] = 1; // 익음
      q.push([ny, nx]);
    }
  }
}

// 결과 계산
let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 0) { // 끝까지 못 익은 토마토
      console.log(-1);
      process.exit(0);
    }
    if (dist[i][j] > answer) answer = dist[i][j];
  }
}

console.log(answer);