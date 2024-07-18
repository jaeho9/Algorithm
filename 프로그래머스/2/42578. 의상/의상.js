function solution(clothes) {
    const clothMap = new Map();  // 의상 종류별로 의상 수를 저장할 Map 객체 생성

    // 의상의 종류별로 의상 수를 세는 과정
    clothes.forEach(([name, type]) => {
        if (clothMap.has(type)) {
            // 해당 종류(type)가 이미 존재하면 기존 값에 1을 더함
            clothMap.set(type, clothMap.get(type) + 1);
        } else {
            // 해당 종류(type)가 존재하지 않으면 1로 초기화
            clothMap.set(type, 1);
        }
    });

    // 모든 조합의 수를 계산하는 과정
    let combinations = 1;
    for (let count of clothMap.values()) {
        combinations *= (count + 1);  // 해당 종류의 의상을 입지 않는 경우를 포함하기 위해 +1
    }

    return combinations - 1;  // 최소 한 개의 의상은 입어야 하므로 아무 것도 입지 않는 경우를 제외
}