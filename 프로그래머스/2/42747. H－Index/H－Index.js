function solution(citations) {
    var answer = 0;
    
    citations.sort((a, b) => b - a); // 내림차순 정렬
    
    //H-Index 계산
    for(let i=0; i<citations.length; i++){
        if(citations[i] < i+1){
            return i;
        }
    }
    
    return citations.length; // 모든 논문이 i+1회 이상 인용된 경우
}