const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
let points = [];

for (let i = 1; i <= n; i++) {
  const [x, r] = input[i].split(" ").map(Number);
  points.push([x - r, i, "L"]); // 왼쪽(시작)
  points.push([x + r, i, "R"]); // 오른쪽(끝)
}

points.sort((a, b) => a[0] - b[0]);

let stack = [];
let ok = true;

for (let [pos, id, type] of points) {
  if (type === "L") {
    if (stack.length && stack[stack.length - 1] === id) {
      ok = false;
      break;
    }
    stack.push(id);
  } else {
    if (!stack.length || stack[stack.length - 1] !== id) {
      ok = false;
      break;
    }
    stack.pop();
  }
}

console.log(ok ? "YES" : "NO");
