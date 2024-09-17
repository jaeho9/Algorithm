function solution(start_num, end_num) {
    var answer = [];
    let j = 0;
    for(let i = start_num; i >= end_num; i--){
        answer[j] = i;
        j++;
    }
    return answer;
}