const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
//const input = fs.readFileSync("example.txt").toString().split("\n");
const N = parseInt(input[0]);

const arr = input.slice(1).map((line) => line.split("").map(Number));

function compress(x, y, size) {
  if (isSame(x, y, size)) {
    return arr[x][y] + "";
  }

  const half = size / 2;
  const topLeft = compress(x, y, half);
  const topRight = compress(x, y + half, half);
  const bottomLeft = compress(x + half, y, half);
  const bottonRight = compress(x + half, y + half, half);

  return "(" + topLeft + topRight + bottomLeft + bottonRight + ")";
}

// 같은 색인지 확인하는 함수
function isSame(x, y, size) {
  const first = arr[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (arr[i][j] !== first) return false;
    }
  }
  return true;
}

console.log(compress(0, 0, N));
