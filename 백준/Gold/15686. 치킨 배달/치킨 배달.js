const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const city = input.slice(1).map(line => line.split(' ').map(Number));

const houses = [];
const chicken = [];

// 도시에서 집과 치킨집의 위치
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (city[i][j] === 1) houses.push([i, j]); // 집
        if (city[i][j] === 2) chicken.push([i, j]); // 치킨집
    }
}

// 두 점 사이의 거리 계산
function getDistance(house, chicken) {
    return Math.abs(house[0] - chicken[0]) + Math.abs(house[1] - chicken[1]);
}

// 치킨집의 조합
function getChickenCombinations(chicken, M) {
    const combinations = [];
    function dfs(start, selected) {
        if (selected.length === M) {
            combinations.push([...selected]);
            return;
        }
        for (let i = start; i < chicken.length; i++) {
            selected.push(chicken[i]);
            dfs(i + 1, selected);
            selected.pop();
        }
    }
    dfs(0, []);
    return combinations;
}

// 모든 치킨집 조합에 대해 최소 치킨 거리 계산
const combinations = getChickenCombinations(chicken, M);
let minDistance = Infinity;

for (const comb of combinations) {
    let totalDistance = 0;

    // 모든 집에 대해 가장 가까운 치킨집의 거리 합
    for (const house of houses) {
        let minHouseDistance = Infinity;
        for (const chick of comb) {
            minHouseDistance = Math.min(minHouseDistance, getDistance(house, chick));
        }
        totalDistance += minHouseDistance;
    }

    // 최소 거리 갱신
    minDistance = Math.min(minDistance, totalDistance);
}

console.log(minDistance);
