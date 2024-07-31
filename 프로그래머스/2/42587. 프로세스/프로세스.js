function solution(priorities, location) {
     // 큐에 프로세스의 인덱스와 우선순위를 함께 저장.
    let queue = priorities.map((priority, index) => ({ priority, index }));
    // 몇 번째로 실행되는지를 나타낼 카운터를 초기화.
    let answer = 0;
    
    while (queue.length > 0) {
        // 큐의 맨 앞 프로세스를 꺼냄.
        let currentProcess = queue.shift();

        // 큐에 남아 있는 프로세스 중 우선순위가 더 높은 것이 있는지 확인.
        if (queue.some(process => process.priority > currentProcess.priority)) {
            // 더 높은 우선순위가 있으면 꺼낸 프로세스를 다시 큐에 넣음.
            queue.push(currentProcess);
        } else {
            // 그렇지 않으면 해당 프로세스를 실행.
            answer++;

            // 만약 실행된 프로세스가 우리가 찾는 프로세스라면 실행 순서를 반환.
            if (currentProcess.index === location) {
                return answer;
            }
        }
    }
}