function solution(answers) {
    var answer = [];
    
    // 수포자들의 찍는 패턴
    const firstPattern = [1, 2, 3, 4, 5];
    const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const scores = [0,0,0]; // 맞힌 문제 수를 저장할 배열
    
    for(let i=0; i<answers.length; i++){
        if(answers[i] === firstPattern[i%firstPattern.length]){
            scores[0]++; // 1번 수포자의 점수 증가
        }
        if(answers[i] === secondPattern[i%secondPattern.length]){
            scores[1]++; // 2번 수포자의 점수 증가
        }
        if(answers[i] === thirdPattern[i%thirdPattern.length]){
            scores[2]++; // 3번 수포자의 점수 증가
        }
    }
    
    // 가장 높은 점수를 계산
    const maxScore = Math.max(...scores);
    
     // 가장 높은 점수를 받은 수포자들을 배열에 저장
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            answer.push(i + 1); // 수포자는 1번부터 시작하므로 index + 1
        }
    }
    
    return answer;
}