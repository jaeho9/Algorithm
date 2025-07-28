const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [n, k] = input.split(' ').map(Number);

const queue = [];

for(let i=1; i<=n; i++){
    queue.push(i);
}

const result = [];

let index = 0;
while(queue.length){
    index = (index + k - 1) % queue.length;
    result.push(queue.splice(index,1)[0]);
}

console.log(`<${result.join(', ')}>`);