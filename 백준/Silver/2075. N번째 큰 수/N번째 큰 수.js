const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    Push(item) {
        let cur = this.heap.length;
        while (cur > 1) {
            const parent = Math.floor(cur / 2);
            if (item < this.heap[parent]) {
                this.heap[cur] = this.heap[parent];
                cur = parent;
            } else break;
        }
        this.heap[cur] = item;
    }

    remove() {
        const removed = this.heap[1];
        if (this.heap.length <= 2) {
            this.heap.pop();
        } else {
            this.heap[1] = this.heap.pop();
            let cur = 1;
            while (true) {
                let left = 2 * cur;
                let right = 2 * cur + 1;
                let smallest = cur;

                if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
                if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;

                if (smallest === cur) break;
                [this.heap[cur], this.heap[smallest]] = [this.heap[smallest], this.heap[cur]];
                cur = smallest;
            }
        }
        return removed;
    }

    getSize() {
        return this.heap.length - 1;
    }
}

const minHeap = new MinHeap();
let N = -1;
let n = 0;

rl.on("line", (line) => {
    if (N === -1) {
        N = parseInt(line);
        n = N;
        return;
    }

    line.split(' ').forEach((val) => {
        minHeap.Push(parseInt(val));
        if (minHeap.getSize() > n) minHeap.remove();
    });

    N--;
    if (N === 0) rl.close();
}).on("close", () => {
    console.log(minHeap.remove());
    process.exit();
});
