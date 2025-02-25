function solution(N, stages) {
    var answer = [];
    let tmp = Array(N+1).fill(0);
    let leng = stages.length;
    
    for (let i = 0; i < stages.length; i++) {
        tmp[stages[i]-1]++; // 해당 스테이지 번호의 카운트를 증가
    }
    for(let i=0; i<N; i++){
        let res = tmp[i] / leng;        
        answer.push([res, i+1]);
        leng -= tmp[i];
    }
    answer.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

    return answer.map(stage => stage[1]);
}