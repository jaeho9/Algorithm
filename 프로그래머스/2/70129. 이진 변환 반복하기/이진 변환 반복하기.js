function solution(s) {
    var answer = [];
 
    let cnt = 0;
    let cnt2 = 0;
    let Leng = 0;
    
    while(true){
        if(s.length === 1) break;
        Leng = s.length;
        s = s.split('0').join('');
        cnt++;
        cnt2 += (Leng - s.length);
        s = s.length.toString(2);
    }
    
    answer[0] = cnt;
    answer[1] = cnt2;
    
    return answer;
}