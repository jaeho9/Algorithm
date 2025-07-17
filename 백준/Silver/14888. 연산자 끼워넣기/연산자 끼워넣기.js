const fs = require('fs');

// 입력 처리
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v => v.split(" ").map(Number));
const [N, nums, operatorCounts] = input;

// 연산자 함수 배열
const operations = [
  (a, b) => a + b,  // 덧셈
  (a, b) => a - b,  // 뺄셈
  (a, b) => a * b,  // 곱셈
  (a, b) => ~~(a / b), // 나눗셈: 정수 나눗셈 (부호 처리 포함)
];

// 최댓값과 최솟값 초기화
let maxResult = -Infinity;
let minResult = Infinity;

// DFS 함수: 연산자 수에 맞게 재귀 탐색
function dfs(count, result, operatorCounts) {
  if (count === N - 1) {
    maxResult = Math.max(maxResult, result);
    minResult = Math.min(minResult, result);
    return;
  }

  // 연산자 순회
  for (let i = 0; i < 4; i++) {
    if (operatorCounts[i] === 0) continue; // 사용할 연산자가 없다면 건너뛰기

    operatorCounts[i]--; // 연산자 하나 사용
    dfs(count + 1, operations[i](result, nums[count + 1]), operatorCounts); // 다음 단계로 재귀 호출
    operatorCounts[i]++; // 연산자 복원
  }
}

// 초기 값으로 DFS 시작
dfs(0, nums[0], operatorCounts);

// 최종 결과 출력
console.log(maxResult);
console.log(minResult);
