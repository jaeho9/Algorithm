function solution(n, arr1, arr2) {
    var answer = [];
    let tmp_arr1=[];
    let tmp_arr2=[];
    
    for(let j=0; j<n; j++){
        let tmp1 = arr1[j].toString(2).padStart(n, '0');
        let tmp2 = arr2[j].toString(2).padStart(n, '0');;
        tmp_arr1.push(tmp1); 
        tmp_arr2.push(tmp2); 
    }
    
    for(let i=0; i<n; i++){
        answer.push("");
        for(let j=0; j<n; j++){
            if(tmp_arr1[i][j] == '0' && tmp_arr2[i][j] == '0'){
            answer[i] += " ";
        }
        else answer[i] += "#";
        }
    }
    return answer;
}