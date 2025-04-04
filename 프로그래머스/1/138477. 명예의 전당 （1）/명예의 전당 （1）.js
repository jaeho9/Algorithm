function solution(k, score) {
    var answer = [];
    let hallOfFame = [];  // 명예의 전당 배열
    
    score.forEach((s)=>{
        hallOfFame.push(s);
        hallOfFame.sort((a,b)=>b-a); // 내림차순
        
        if(hallOfFame.length > k){
            hallOfFame.pop();  // k개를 초과하면 최하위 점수 제거
        }
        
        answer.push(hallOfFame[hallOfFame.length - 1]);  // 최하위 점수 저장
    });
    
    return answer;
}