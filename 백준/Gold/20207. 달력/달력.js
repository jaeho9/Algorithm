const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const N = Number(input[0]);
const schedule = input.slice(1).map((line) => line.split(" ").map(Number));

const calendar = Array(366).fill(0);

for (const [s, e] of schedule) {
  for (let day = s; day <= e; day++) {
    calendar[day]++;
  }
}

let result = 0;
let w = 0;
let h = 0;

for (let day = 1; day <= 365; day++) {
  if (calendar[day] > 0) {
    w++;
    h = Math.max(h, calendar[day]);
  } else if (w > 0) {
    result += w * h;
    w = 0;
    h = 0;
  }
}

if (w > 0) {
  result += w * h;
}

console.log(result);
