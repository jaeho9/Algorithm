const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = +input[0];
const map = input.slice(1, N + 1).map(line => line.split(''));

// 방향 배열 (상, 하, 좌, 우)
const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
];

// DFS 함수
function dfs(x, y, color, visited, map) {
    visited[x][y] = true;
    for (let [dx, dy] of directions) {
        const nx = x + dx, ny = y + dy;
        if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny] && map[nx][ny] === color) {
            dfs(nx, ny, color, visited, map);
        }
    }
}

// 영역 개수 계산 함수
function countRegions(map) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let count = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) {
                dfs(i, j, map[i][j], visited, map);
                count++;
            }
        }
    }
    return count;
}

// 1. 일반 시각: 원본 맵 그대로 사용
const normalCount = countRegions(map);

// 2. 적록색약 시각: 빨간색과 초록색을 동일한 색으로 취급
const alteredMap = map.map(row => row.map(cell => (cell === 'R' ? 'G' : cell)));
const colorblindCount = countRegions(alteredMap);

console.log(normalCount, colorblindCount);
