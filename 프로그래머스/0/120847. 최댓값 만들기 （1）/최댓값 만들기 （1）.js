function solution(numbers) { 
    var array = numbers.sort((a,b) => b-a)  
    return array[0]*array[1];
}