function solution(prices) {
    var answer = [];
    let leng = prices.length;
    
    for(let i=0; i<leng; i++){
        let flag = 0; // 작은 값 없을때 0
        for(let j=i; j<leng; j++){
            if(prices[i] > prices[j]){ // 작은 값 있으면
                flag = 1;
                let tmp = j-i;
                // console.log(tmp , 1);
                answer.push(tmp);
                break;
            }
            
        }
        if(flag == 0){
            let tmp = (leng-1) - i;
            // console.log(tmp , 2);
            answer.push(tmp);
        }
    }
    
    
    return answer;
}