const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const N = Number(input[0]);
const words = input.slice(1, 1 + N);

const uniq = Array.from(new Set(words));

uniq.sort((a, b) => {
  const lenDiff = a.length - b.length;
  if (lenDiff !== 0) return lenDiff;
  return a < b ? -1 : a > b ? 1 : 0;
});

console.log(uniq.join('\n'));
