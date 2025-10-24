function solution(s) {
    var answer = [];
    const sets = s
    .slice(2,-2)
    .split("},{")
    
    let parsed = [];
    
    for(let i=0; i < sets.length; i++){
        let nums = sets[i].split(",");
        let arr = [];
        for(let j=0; j<nums.length; j++){
            arr.push(Number(nums[j]));
        }
        // console.log(arr)
        parsed.push(arr);
    }
    parsed.sort((a,b) => a.length - b.length);
    
    
    for(let i=0; i<parsed.length; i++){
        for(let j=0; j<parsed[i].length; j++){
            let num = parsed[i][j];
            if(answer.indexOf(num) === -1){
                answer.push(num);
            }
        }
    }

    return answer;
}