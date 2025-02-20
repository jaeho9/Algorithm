function solution(number, limit, power) {
    let answer = 0;
    let divisors = [];

    for (let i = 1; i <= number; i++) {
        let cnt = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                cnt += (j * j === i) ? 1 : 2;
            }
        }
        divisors.push(cnt);
    }

    for (const cnt of divisors) {
        answer += (cnt <= limit) ? cnt : power;
    }

    return answer;
}