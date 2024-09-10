function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = Array(bridge_length).fill(0); // 다리 위 트럭의 무게 (0은 빈 공간)
    let total_weight = 0; // 현재 다리 위 트럭들의 총 무게
    let queue = truck_weights.slice(); // 대기 중인 트럭들
    
    while (queue.length > 0 || total_weight > 0) {
        // 다리 위의 트럭 이동
        total_weight -= bridge.shift();
        
        // 새 트럭이 다리에 올라갈 수 있으면 올라감
        if (queue.length > 0 && total_weight + queue[0] <= weight) {
            let truck = queue.shift();
            bridge.push(truck);
            total_weight += truck;
        } else {
            bridge.push(0);
        }
        
        // 시간 증가
        answer++;
    }
    
    return answer;
}
