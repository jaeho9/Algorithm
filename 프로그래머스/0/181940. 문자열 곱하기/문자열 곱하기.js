function solution(my_string, k) {
    var answer = '';
    for(let i=0; i<k; i++){
        for(let j=0; j<my_string.length; j++){
            answer += my_string[j];
        }
    }
    return answer;
}