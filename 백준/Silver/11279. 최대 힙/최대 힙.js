const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[p] >= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }
  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      let l = i * 2 + 1, r = i * 2 + 2, b = i;
      if (l < this.heap.length && this.heap[l] > this.heap[b]) b = l;
      if (r < this.heap.length && this.heap[r] > this.heap[b]) b = r;
      if (b === i) break;
      [this.heap[i], this.heap[b]] = [this.heap[b], this.heap[i]];
      i = b;
    }
    return max;
  }
}

const n = input[0];
const heap = new MaxHeap();
let res = [];
for (let i = 1; i <= n; i++) {
  if (input[i] === 0) res.push(heap.pop());
  else heap.push(input[i]);
}
console.log(res.join("\n"));
