const fs = require('fs');
const [nStr, kStr, numStr] = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let K = +kStr;

const stack = [];
for (const ch of numStr.trim()) {
  while (K > 0 && stack.length && stack[stack.length - 1] < ch) {
    stack.pop();
    K--;
  }
  stack.push(ch);
}

// 아직 제거할 게 남아있으면 뒤에서 제거
const result = K > 0 ? stack.slice(0, stack.length - K).join('') : stack.join('');
console.log(result);