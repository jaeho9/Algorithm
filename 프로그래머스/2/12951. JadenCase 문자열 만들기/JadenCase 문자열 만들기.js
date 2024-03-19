function solution(s) {
    var answer = '';
    
    answer = s.split(" ").map(list => list.toLowerCase());
 
    answer = answer.map(list => list.replace(list.charAt(0), list.charAt(0).toUpperCase())).join(' ');
    
    
    return answer;
}