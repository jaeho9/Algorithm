function solution(survey, choices) {
    var answer = '';
    const score = { R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0 };
    
        for (let i = 0; i < survey.length; i++) {
        const [a, b] = survey[i];         // a: 비동의 유형, b: 동의 유형
        const diff = choices[i] - 4;      // -3 ~ +3
        if (diff > 0) {
            score[b] += diff;             // 동의(+) → b에
        } else if (diff < 0) {
            score[a] += -diff;            // 비동의(–) → a에
        }
    }

    
    answer += score.R >= score.T ? 'R' : 'T';
    answer += score.C >= score.F ? 'C' : 'F';
    answer += score.J >= score.M ? 'J' : 'M';
    answer += score.A >= score.N ? 'A' : 'N';
    
    return answer;
}