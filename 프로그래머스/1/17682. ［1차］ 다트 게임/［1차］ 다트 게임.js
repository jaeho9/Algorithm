function solution(dartResult) {
    let stack = [];
    let score = 0;
    
    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {  // 숫자일 경우
            if (dartResult[i] === '1' && dartResult[i + 1] === '0') {  // '10' 처리
                score = 10;
                i++;  // '0'을 건너뛴다.
            } else {
                score = parseInt(dartResult[i]);
            }
        } else if (dartResult[i] === 'S') {
            stack.push(score ** 1);
        } else if (dartResult[i] === 'D') {
            stack.push(score ** 2);
        } else if (dartResult[i] === 'T') {
            stack.push(score ** 3);
        } else if (dartResult[i] === '*') {
            if (stack.length > 1) {
                stack[stack.length - 2] *= 2;  // 이전 점수 2배
            }
            stack[stack.length - 1] *= 2;  // 현재 점수 2배
        } else if (dartResult[i] === '#') {
            stack[stack.length - 1] *= -1;  // 현재 점수 마이너스
        }
    }
    
    return stack.reduce((a, b) => a + b, 0);  // 최종 점수 합산
}