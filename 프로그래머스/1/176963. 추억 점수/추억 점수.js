function solution(name, yearning, photo) {
    var answer = [];
    
    let obj = {}; // 객체 생성
    
    for (let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i]; 
    }
    
    for(let i=0; i<photo.length; i++){
        let sum = 0;
        for(let j=0; j<photo[i].length; j++){
            let person = photo[i][j];
            if(person in obj){
                sum += obj[person];
            }
        }
        answer.push(sum);
    }
    
    
    return answer;
}