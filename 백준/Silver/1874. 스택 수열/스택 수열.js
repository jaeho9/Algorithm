const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const sequence = input.slice(1).map(Number);

let stack = [];
let result = [];
let current = 1;
let possible = true;

for (let i = 0; i < n; i++) {
  const target = sequence[i];

  // target까지 스택에 push
  while (current <= target) {
    stack.push(current++);
    result.push("+");
  }

  // 스택의 top이 target인지 확인 후 pop
  if (stack[stack.length - 1] === target) {
    stack.pop();
    result.push("-");
  } else {
    possible = false;
    break;
  }
}

if (!possible) {
  console.log("NO");
} else {
  console.log(result.join("\n"));
}
