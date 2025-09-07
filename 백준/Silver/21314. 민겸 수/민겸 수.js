const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

// 최대값
let maxRes = '';
let mCount = 0;
for (let ch of input) {
  if (ch === 'M') {
    mCount++;
  } else { // K
    if (mCount > 0) {
      maxRes += '5' + '0'.repeat(mCount);
      mCount = 0;
    } else {
      maxRes += '5';
    }
  }
}
if (mCount > 0) {
  maxRes += '1'.repeat(mCount);
}

// 최소값
let minRes = '';
mCount = 0;
for (let ch of input) {
  if (ch === 'M') {
    mCount++;
  } else { // K
    if (mCount > 0) {
      minRes += '1' + '0'.repeat(mCount - 1);
      mCount = 0;
    }
    minRes += '5';
  }
}
if (mCount > 0) {
  minRes += '1' + '0'.repeat(mCount - 1);
}

console.log(maxRes);
console.log(minRes);
