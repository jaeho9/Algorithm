function solution(N, road, K) {
    const delTime = Array(N+1).fill(500000);
    const queue = [];
    const roads = Array.from({length:N+1}, () => []);

    road.forEach(([v1, v2, t]) => {
        roads[v1].push({ to: v2, time: t });
        roads[v2].push({ to: v1, time: t });
    });
    
    delTime[1] = 0;
    queue.push({to: 1, time: 0});
    
    while (queue.length) {
        let {to, time} = queue.shift();
        
        roads[to].forEach(next => {
            if (delTime[next.to] > delTime[to] + next.time) {
                delTime[next.to] = delTime[to] + next.time;
                queue.push(next);
            }
        })
        
    }
    
    return delTime.filter(x => x <= K).length;
}