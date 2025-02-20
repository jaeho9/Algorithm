function solution(number, limit, power) {
    var answer = 0;
    let tmp_arr  = []; // 약수의 개수를 넣을 배열
    
    for(let i=1; i<=number; i++){
        let cnt = 0;
        let idx = 1;
        for(let j = 0; j*j<=i; j++){
            if(i % j === 0){
                cnt += (j*j === i) ? 1 : 2;
            }
        }
        tmp_arr.push(cnt);
    }
    
    console.log(tmp_arr);
    
    for(let i=0; i<tmp_arr.length; i++){
        if(tmp_arr[i] <= limit){
            answer+=tmp_arr[i];
        }else{
            answer+=power;
        }
    }

    return answer;
}