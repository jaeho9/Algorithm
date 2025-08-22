const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M, H] = input[0].split(' ').map(Number);
const box = [];
let queue = [];
let directions = [
    [-1, 0, 0], [1, 0, 0], // x축 방향
    [0, -1, 0], [0, 1, 0], // y축 방향
    [0, 0, -1], [0, 0, 1]  // z축 방향
];

// 입력 처리: 3D 배열 box 초기화
let idx = 1; // input을 처리할 인덱스
for (let i = 0; i < H; i++) {
    let layer = [];
    for (let j = 0; j < M; j++) {
        layer.push(input[idx].split(' ').map(Number));
        idx++;
    }
    box.push(layer);
}

// 초기 큐에 익은 토마토들 넣기
for (let h = 0; h < H; h++) {
    for (let m = 0; m < M; m++) {
        for (let n = 0; n < N; n++) {
            if (box[h][m][n] === 1) {
                queue.push([h, m, n]);  // 큐에 3D 좌표 추가
            }
        }
    }
}

let front = 0;

// BFS 수행
while (front < queue.length) {
    const [z, y, x] = queue[front++];
    for (let dir of directions) {
        const [dz, dy, dx] = dir;
        const nz = z + dz, ny = y + dy, nx = x + dx;
        if (nz >= 0 && nz < H && ny >= 0 && ny < M && nx >= 0 && nx < N && box[nz][ny][nx] === 0) {
            box[nz][ny][nx] = box[z][y][x] + 1;  // 토마토 익히기
            queue.push([nz, ny, nx]);  // 큐에 새로운 위치 추가
        }
    }
}

let result = 0;

// 모든 토마토가 익었는지 확인
for (let h = 0; h < H; h++) {
    for (let m = 0; m < M; m++) {
        for (let n = 0; n < N; n++) {
            if (box[h][m][n] === 0) {  // 익지 않은 토마토가 있다면
                console.log(-1);  // -1 출력하고 종료
                return;
            }
            result = Math.max(result, box[h][m][n]);
        }
    }
}

console.log(result - 1);  // 익는 데 걸린 최대 일수 출력
