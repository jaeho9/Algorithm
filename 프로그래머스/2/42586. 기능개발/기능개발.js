function solution(progresses, speeds) {
    let answer = [];
    // 각 작업이 완료되기까지 필요한 일수를 계산하여 days 배열에 저장
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    // 첫 번째 작업의 완료 일수를 maxDay로 설정
    let maxDay = days[0];
    // 현재 배포할 기능의 개수를 카운트
    let count = 1;

    // 두 번째 작업부터 순회하면서 배포 가능한 기능을 계산
    for (let i = 1; i < days.length; i++) {
        // 현재 작업의 완료 일수가 maxDay보다 작거나 같으면 같은 날 배포 가능
        if (days[i] <= maxDay) {
            count++;
        } else {
            // 그렇지 않으면 지금까지의 count를 결과에 추가하고
            answer.push(count);
            // 새로운 배포 그룹 시작
            count = 1;
            // maxDay를 현재 작업의 완료 일수로 업데이트
            maxDay = days[i];
        }
    }
    
    // 마지막 배포 그룹의 개수를 결과에 추가
    answer.push(count);
    
    return answer;
}
