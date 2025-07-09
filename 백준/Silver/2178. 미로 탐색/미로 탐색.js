const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const mz = input.slice(1).map((line) => line.split("").map(Number));

const visited = Array.from({ length: n }, () => Array(m).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const queue = [[0, 0]];
visited[0][0] = true;

while (queue.length) {
  const [x, y] = queue.shift(); // 현재 좌표 꺼내기

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
      if (!visited[nx][ny] && mz[nx][ny] === 1) {
        visited[nx][ny] = true;
        mz[nx][ny] = mz[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

console.log(mz[n - 1][m - 1]);
