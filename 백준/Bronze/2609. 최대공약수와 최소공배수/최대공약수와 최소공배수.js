const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);

function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

function lcm(x, y) {
    return (x * y) / gcd(x, y);
}

console.log(gcd(a, b));
console.log(lcm(a, b));
