// 🔹 소수 판별 함수
// 숫자 n이 소수인지 판별하는 함수
function isPrime(n) {
    if (n < 2) return false; // 0과 1은 소수가 아님
    for (let i = 2; i * i <= n; i++) { // 2부터 √n까지 확인 (효율적인 소수 판별)
        if (n % i === 0) return false; // 나누어 떨어지면 소수가 아님
    }
    return true; // 위 조건을 통과하면 소수
}

// 🔹 순열 생성 함수
// 배열 arr에서 selectNum 개의 숫자를 선택하여 만들 수 있는 모든 순열을 반환
function getPermutations(arr, selectNum) {
    if (selectNum === 1) return arr.map(v => [v]); // 1개만 선택할 경우 개별 요소를 배열로 변환하여 반환

    let result = []; // 최종 순열 결과를 저장할 배열

    arr.forEach((fixed, index, origin) => {
        let rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 현재 요소를 제외한 나머지 배열
        let perms = getPermutations(rest, selectNum - 1); // 나머지 요소들로 순열 생성 (재귀 호출)
        let attached = perms.map(v => [fixed, ...v]); // 현재 요소(fixed)를 앞에 붙인 새로운 순열 생성
        result.push(...attached); // 결과 배열에 추가
    });

    return result; // 최종 생성된 순열 배열 반환
}

// 🔹 solution 함수
// 주어진 숫자 문자열 numbers로 만들 수 있는 소수의 개수를 반환
function solution(numbers) {
    let numSet = new Set(); // 중복 제거를 위한 Set (같은 숫자가 여러 번 나오는 걸 방지)
    let numArr = numbers.split(""); // 입력 문자열을 한 글자씩 나누어 배열로 변환

    // 🔸 모든 길이(1부터 numbers.length까지)의 순열 생성
    for (let i = 1; i <= numArr.length; i++) {
        let perms = getPermutations(numArr, i); // i 길이의 숫자 조합 생성
        perms.forEach(perm => numSet.add(parseInt(perm.join(""), 10))); // 생성된 숫자를 정수로 변환 후 Set에 추가
    }

    // 🔸 소수 개수 세기
    return [...numSet].filter(isPrime).length; // Set을 배열로 변환 후, 소수만 필터링하여 개수 반환
}
