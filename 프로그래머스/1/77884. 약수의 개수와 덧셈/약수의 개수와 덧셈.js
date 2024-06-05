function solution(left, right) {
    var answer = 0;

    for(let i=left; i<=right; i++){
        let idx = 1;
        let cnt = 0; 
        while(idx<=i){
            if(i%idx==0){
                cnt++;
            }
            idx++;
        }
        if(cnt%2 === 0){
            answer+=i;
        }else answer -= i;
    }
    
    return answer;
}