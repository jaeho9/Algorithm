function solution(nums) {
    const uniqueNums = new Set(nums); // 폰켓몬 종류를 담은 Set을 만듬.
    
    const uniqueCnt = uniqueNums.size; // 고유한 폰켓몬 종류 개수
    
    const maxSelect = nums.length /2; // 선택할 폰켓몬 수
    
    answer = Math.min(uniqueCnt, maxSelect); // 최대 종류의 개수는 둘 중 작은 값
    
    return answer;
}