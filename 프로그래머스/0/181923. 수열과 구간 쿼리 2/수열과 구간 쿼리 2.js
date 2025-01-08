function solution(arr, queries) {
    let answer=[];
    for(let i = 0 ; i < queries.length ; i ++){
     const [s,e,k] = queries[i];
        let tempMax = Infinity;
        for(let j = s ; j <= e ; j++)
            if(arr[j] > k)   tempMax = Math.min(tempMax,arr[j]);
        if(tempMax === Infinity) tempMax =-1;
        answer.push(tempMax);
    }
    return answer;
}