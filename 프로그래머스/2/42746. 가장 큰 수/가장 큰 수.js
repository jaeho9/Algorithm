function solution(numbers) {
    const answer = numbers.map(num=>num.toString()) // 문자열로 변환
    .sort((a,b)=>(b+a) - (a+b)) //두 숫자를 이어붙여 비교
    .join(''); // 정렬 결과 이어 붙임
    
    return answer[0] === '0' ? '0' : answer;
}