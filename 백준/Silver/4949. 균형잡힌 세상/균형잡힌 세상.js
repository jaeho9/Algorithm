const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("example.txt").toString().trim().split("\n");

function solution(str) {
  const stack = [];
  for (const char of str) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.pop() !== "(") return "no";
    } else if (char === "]") {
      if (stack.pop() !== "[") return "no";
    }
  }
  return stack.length === 0 ? "yes" : "no";
}

for (const line of input) {
  if (line === ".") break;
  console.log(solution(line));
}
