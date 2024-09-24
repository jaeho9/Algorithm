function solution(s) {
    var answer = '';
    let sp = s.split(" ");
    
    for(let i=0; i<sp.length; i++){
        for(let j=0; j<sp[i].length; j++){
            if((j+1)%2 == 0){
                answer += sp[i][j].toLowerCase(); // 짝수 번째 소문자
            }else{ 
                answer += sp[i][j].toUpperCase(); // 홀수 일때 대문자
            }
        }

        if(i != (sp.length-1)){  
            answer += " ";
        }
    }
    
    return answer;
}