const fs = require("fs");

const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let heard = new Set();
let seen = new Set();

for (let i = 1; i <= n; i++) {
  heard.add(input[i].trim());
}

for (let i = n + 1; i <= n + m; i++) {
  seen.add(input[i].trim());
}

let result = [...heard].filter((name) => seen.has(name));

result.sort();

console.log(result.length);
result.forEach((name) => console.log(name));
