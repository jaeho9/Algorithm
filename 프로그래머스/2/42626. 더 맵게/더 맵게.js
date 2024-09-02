class MinHeap {
    constructor() {
        this.heap = []; // 힙을 저장할 배열
    }

    // 부모 노드의 인덱스를 반환 (현재 노드의 부모 위치를 찾음)
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // 왼쪽 자식 노드의 인덱스를 반환
    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    // 오른쪽 자식 노드의 인덱스를 반환
    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    // 두 노드의 위치를 바꿔주는 함수
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // 힙에 값을 삽입하는 메서드
    insert(value) {
        this.heap.push(value);  // 새로운 값을 힙 배열 끝에 추가
        this.heapifyUp();       // 추가한 값을 위로 이동시켜 올바른 위치에 배치
    }

    // 힙의 마지막에 추가된 값을 위로 올리면서 정렬 (힙 성질 유지)
    heapifyUp() {
        let index = this.heap.length - 1;  // 마지막에 삽입된 값의 인덱스
        // 부모 노드가 있고, 부모보다 현재 값이 작으면 교환 반복
        while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(index, this.getParentIndex(index));  // 부모와 현재 노드를 교환
            index = this.getParentIndex(index);  // 인덱스를 부모의 인덱스로 갱신
        }
    }

    // 힙에서 최소값(루트 값)을 제거하고 반환하는 메서드
    remove() {
        if (this.heap.length === 1) return this.heap.pop();  // 힙에 요소가 하나만 있으면 그대로 반환

        const minValue = this.heap[0];  // 루트 값(최소값)
        this.heap[0] = this.heap.pop();  // 마지막 값을 루트로 이동
        this.heapifyDown();  // 루트부터 아래로 내려가면서 정렬 (힙 성질 유지)
        return minValue;  // 최소값 반환
    }

    // 루트에서 시작하여 자식과 비교하면서 아래로 이동시켜 정렬
    heapifyDown() {
        let index = 0;
        // 왼쪽 자식이 있는 동안 계속 반복
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);  // 왼쪽 자식 인덱스
            // 오른쪽 자식이 존재하고 오른쪽 자식이 더 작으면 오른쪽 자식 선택
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            // 자식이 부모보다 작지 않으면 반복 종료 (힙 성질 만족)
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            }
            // 자식이 더 작으면 부모와 교환
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;  // 인덱스를 자식 인덱스로 갱신
        }
    }

    // 힙의 크기 반환 (힙 배열의 길이)
    size() {
        return this.heap.length;
    }

    // 힙의 루트 값(최소값)을 반환
    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    let mixCount = 0;

    // 모든 스코빌 값을 최소 힙에 삽입
    for (let i = 0; i < scoville.length; i++) {
        minHeap.insert(scoville[i]);
    }

    while (minHeap.size() > 1 && minHeap.peek() < K) {
        const first = minHeap.remove();  // 가장 작은 값
        const second = minHeap.remove(); // 두 번째로 작은 값
        const newScoville = first + second * 2;
        minHeap.insert(newScoville);     // 새로 만든 음식의 스코빌 지수를 힙에 삽입
        mixCount++;                      // 섞은 횟수 증가
    }

    // 만약 가장 작은 스코빌 지수가 여전히 K 미만이면 실패
    if (minHeap.peek() < K) {
        return -1;
    }

    return mixCount;
}