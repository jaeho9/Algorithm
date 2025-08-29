const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input);

function printStar(n, x = 0, y = 0, blank = false) {
  if (n === 1) {
    process.stdout.write(blank ? " " : "*");
    return;
  }

  const newSize = n / 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const nextBlank = blank || (i === 1 && j === 1);
      printStar(newSize, x + i * newSize, y + j * newSize, nextBlank);
    }
  }
}

function draw(n) {
  if (n === 1) {
    console.log("*");
    return;
  }

  const newSize = n / 3;
  const rows = [];

  function helper(size, blank = false) {
    if (size === 1) {
      return [blank ? " " : "*"];
    }

    const prev = helper(size / 3);
    const result = [];

    for (let i = 0; i < 3; i++) {
      for (let r = 0; r < prev.length; r++) {
        let line = "";
        for (let j = 0; j < 3; j++) {
          const nextBlank = blank || (i === 1 && j === 1);
          line += prev[r]
            .split("")
            .map((c) => (nextBlank ? " " : c))
            .join("");
        }
        result.push(line);
      }
    }
    return result;
  }

  const finalPattern = helper(n);
  console.log(finalPattern.join("\n"));
}

draw(N);
