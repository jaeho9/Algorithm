const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const stack = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
        stack.push('(');
    } else {
        if (input[i - 1] === '(') {
            stack.pop();  // 직전의 '(' 제거
            sum += stack.length;  // 현재 남은 수만큼 잘림
        } else {
            stack.pop();  // 막대 끝 pop
            sum += 1;
        }
    }
}

console.log(sum);