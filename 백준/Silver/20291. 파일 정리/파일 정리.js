const fs = require('fs');

// 입력 받기
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 파일 개수
const n = parseInt(input[0]);

// 확장자 개수를 저장할 객체
const extensionCount = {};

// 파일 이름에서 확장자 추출하고 카운트하기
for (let i = 1; i <= n; i++) {
  const fileName = input[i];
  const extension = fileName.split('.').pop(); // '.'을 기준으로 나누고 마지막 부분이 확장자

  if (extensionCount[extension]) {
    extensionCount[extension]++;
  } else {
    extensionCount[extension] = 1;
  }
}

// 확장자를 알파벳 순으로 정렬
const extensions = Object.keys(extensionCount).sort();

// 결과 출력
for (let ext of extensions) {
  console.log(`${ext} ${extensionCount[ext]}`);
}
