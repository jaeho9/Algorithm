function solution(n) {
    var answer = 0;
    let tr = n.toString(3); // 3진법 변환
    let rev = tr.split("").reverse().join(""); // 뒤집어
    answer = parseInt(rev,'3')
    
    
    return answer;
}