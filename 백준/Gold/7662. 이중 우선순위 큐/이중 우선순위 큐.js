const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 이진 힙 클래스
class Heap {
  constructor(compare) {
    this.heap = [null]; // 1-based index 사용
    this.compare = compare;
  }

  insert(value) {
    let idx = this.heap.length;
    while (idx > 1) {
      const parent = Math.floor(idx / 2);
      if (this.compare(this.heap[parent], value)) {
        this.heap[idx] = this.heap[parent];
        idx = parent;
      } else break;
    }
    this.heap[idx] = value;
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();
    if (this.heap.length <= 1) return null;

    const top = this.heap[1];
    this.heap[1] = this.heap.pop();

    let idx = 1;
    while (idx * 2 < this.heap.length) {
      let child = idx * 2;
      if (
        child + 1 < this.heap.length &&
        this.compare(this.heap[child], this.heap[child + 1])
      ) {
        child++;
      }
      if (this.compare(this.heap[idx], this.heap[child])) {
        [this.heap[idx], this.heap[child]] = [this.heap[child], this.heap[idx]];
        idx = child;
      } else break;
    }
    return top;
  }

  peek() {
    return this.heap.length > 1 ? this.heap[1] : null;
  }

  size() {
    return this.heap.length - 1;
  }

  clear() {
    this.heap = [null];
  }
}

const minHeap = new Heap((a, b) => a > b);
const maxHeap = new Heap((a, b) => a < b);
const countMap = new Map(); // 값의 유효 개수 관리

let lineIndex = 0;
let endLine = 0;
let output = [];

rl.on("line", (line) => {
  if (lineIndex === 0) {
    lineIndex++;
    return;
  }

  // 새로운 테스트 케이스 시작 시 초기화
  if (lineIndex > endLine) {
    endLine = Number(line) + lineIndex++;
    minHeap.clear();
    maxHeap.clear();
    countMap.clear();
    return;
  }

  const [cmd, numStr] = line.split(" ");
  const num = Number(numStr);

  if (cmd === "I") {
    // 삽입 연산
    minHeap.insert(num);
    maxHeap.insert(num);
    countMap.set(num, (countMap.get(num) || 0) + 1);
  } else {
    // 삭제 연산
    if (num === 1) {
      // 최대값 삭제
      while (maxHeap.size()) {
        const maxVal = maxHeap.pop();
        if (countMap.get(maxVal) > 0) {
          countMap.set(maxVal, countMap.get(maxVal) - 1);
          break;
        }
      }
    } else {
      // 최소값 삭제
      while (minHeap.size()) {
        const minVal = minHeap.pop();
        if (countMap.get(minVal) > 0) {
          countMap.set(minVal, countMap.get(minVal) - 1);
          break;
        }
      }
    }
  }

  // 테스트 케이스 끝 처리
  if (lineIndex === endLine) {
    while (maxHeap.size() && (!countMap.get(maxHeap.peek()) || countMap.get(maxHeap.peek()) === 0)) {
      maxHeap.pop();
    }
    while (minHeap.size() && (!countMap.get(minHeap.peek()) || countMap.get(minHeap.peek()) === 0)) {
      minHeap.pop();
    }

    const maxVal = maxHeap.peek();
    const minVal = minHeap.peek();
    output.push(maxVal === null || minVal === null ? "EMPTY" : `${maxVal} ${minVal}`);
  }

  lineIndex++;
});

rl.on("close", () => {
  console.log(output.join("\n"));
});
