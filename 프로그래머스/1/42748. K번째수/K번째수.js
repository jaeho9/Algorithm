function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++){
        let tmp_arr = array.slice(commands[i][0]-1 , commands[i][1]);
        tmp_arr.sort((a, b) => a - b);
        answer[i] = tmp_arr[commands[i][2]-1];
    }
    return answer;
}