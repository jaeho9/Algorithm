function solution(age) {
    const ageArr = String(age).split("");
    
    let ans = "";
    
    for(let i = 0; i < ageArr.length; i++){
        ans += String.fromCharCode(Number(ageArr[i]) + 97);
    }
    
    return ans;
}