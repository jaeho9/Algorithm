function solution(price, money, count) {
    var answer = 0;
    let tmp = 0;
    for(let i=0; i<count; i++){ 
        tmp += price;
        answer += tmp;
    }
    if(answer - money > 0){
        return answer - money;
    }
    else return 0
}