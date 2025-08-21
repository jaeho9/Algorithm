const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(line => line.trim());
const n = parseInt(input[0]);  // 컴퓨터 수
const m = parseInt(input[1]);  // 연결된 컴퓨터 수

// 인접 리스트 초기화
const graph = Array.from({ length: n + 1 }, () => []);

// 연결된 컴퓨터 정보 입력
for (let i = 2; i < m + 2; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

// 방문 여부를 기록할 배열
const visited = Array(n + 1).fill(false);
let infectedCount = 0;

// DFS 함수
function dfs(node) {
    visited[node] = true;
    infectedCount++;

    for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor);
        }
    }
}

// 1번 컴퓨터부터 DFS 시작
dfs(1);

// 1번 컴퓨터를 제외한 감염된 컴퓨터 수 출력
console.log(infectedCount - 1);
