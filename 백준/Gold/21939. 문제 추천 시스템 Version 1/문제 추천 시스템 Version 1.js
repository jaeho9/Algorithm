const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Heap {
  constructor(compare) {
    this.data = [null];
    this.compare = compare;
  }

  push(value) {
    this.data.push(value);
    let idx = this.data.length - 1;
    while (idx > 1) {
      let parent = Math.floor(idx / 2);
      if (this.compare(this.data[idx], this.data[parent])) {
        [this.data[idx], this.data[parent]] = [this.data[parent], this.data[idx]];
        idx = parent;
      } else break;
    }
  }

  pop() {
    if (this.data.length <= 1) return null;
    if (this.data.length === 2) return this.data.pop();
    const top = this.data[1];
    this.data[1] = this.data.pop();
    let idx = 1;
    while (true) {
      let left = idx * 2;
      let right = idx * 2 + 1;
      let smallest = idx;
      if (left < this.data.length && this.compare(this.data[left], this.data[smallest])) {
        smallest = left;
      }
      if (right < this.data.length && this.compare(this.data[right], this.data[smallest])) {
        smallest = right;
      }
      if (smallest === idx) break;
      [this.data[idx], this.data[smallest]] = [this.data[smallest], this.data[idx]];
      idx = smallest;
    }
    return top;
  }

  top() {
    return this.data[1];
  }

  size() {
    return this.data.length - 1;
  }
}

const N = +input[0];
const problems = new Map(); // 문제번호 -> 난이도

const maxHeap = new Heap((a, b) => {
  if (a[0] === b[0]) return a[1] > b[1];
  return a[0] > b[0]; // 난이도 높은 게 우선
});
const minHeap = new Heap((a, b) => {
  if (a[0] === b[0]) return a[1] < b[1];
  return a[0] < b[0]; // 난이도 낮은 게 우선
});

// 초기 문제 등록
let idx = 1;
for (let i = 0; i < N; i++) {
  const [P, L] = input[idx++].split(' ').map(Number);
  problems.set(P, L);
  maxHeap.push([L, P]);
  minHeap.push([L, P]);
}

const M = +input[idx++];
for (let i = 0; i < M; i++) {
  const [cmd, a, b] = input[idx++].split(' ');

  if (cmd === 'add') {
    const P = +a, L = +b;
    problems.set(P, L);
    maxHeap.push([L, P]);
    minHeap.push([L, P]);
  }

  else if (cmd === 'solved') {
    const P = +a;
    problems.delete(P); // lazy deletion
  }

  else if (cmd === 'recommend') {
    const x = +a;
    const heap = x === 1 ? maxHeap : minHeap;
    while (heap.size()) {
      const [L, P] = heap.top();
      if (problems.has(P) && problems.get(P) === L) {
        console.log(P);
        break;
      } else {
        heap.pop(); // lazy delete
      }
    }
  }
}
