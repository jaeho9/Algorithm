function solution(phone_book) {
    // 전화번호부 정렬
    phone_book.sort();

    // 인접한 전화번호들만 비교
    for (let i = 0; i < phone_book.length - 1; i++) {
        // 현재 전화번호가 다음 전화번호의 접두사인지 확인
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }

    // 접두사인 경우가 없으면 true 반환
    return true;
}