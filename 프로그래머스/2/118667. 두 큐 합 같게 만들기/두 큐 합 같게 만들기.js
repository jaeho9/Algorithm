function solution(queue1, queue2) {
    var answer = -2;
    
    let total_arr = [...queue1, ...queue2];
    let total = 0; // 총 합산
    let total_q1 = 0;
    let total_q2 = 0;

    if(total%2 !== 0){
        return -1;  
    }
    
    queue1.sort(function(a,b){return b-a});
    queue2.sort(function(a,b){return b-a});
    
    for(let i=0; i<queue1.length; i++){
        total += queue1[i] + queue2[i];
        total_q1 += queue1[i];
        total_q2 += queue2[i];
    }
    
    let cnt = 0; // 이동 횟수
    let i = 0; // q1 의 시작 인덱스
    let j = queue1.length; // q2의 시작 인덱스
    const limit = j * 3 // 무한 루프 방지
    
    while(cnt <= limit){
        if(total_q1 === total/2){
            return cnt;
        }
        
        if(total_q1 > total/2){
            total_q1 -= total_arr[i%total_arr.length];
            i++;
        }
        else{
            total_q1 += total_arr[j%total_arr.length];
            j++;
        }
        cnt++;
    }
    
    
    return -1;
}