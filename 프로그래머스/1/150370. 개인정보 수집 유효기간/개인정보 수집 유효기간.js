function solution(today, terms, privacies) {
    var answer = [];
    
   // 오늘 날짜를 연, 월, 일로 변환
    const [todayYear, todayMonth, todayDay] = today.split('.').map(Number); 
    
    const termMap = {}; //객체(Map)로 저장
     terms.forEach(term => {
        const [type, duration] = term.split(' ');
        termMap[type] = Number(duration);
    });
    
    privacies.forEach((privacy, index)=>{
        let [date, termType] = privacy.split(' ');
        let [year, month, day] = date.split('.').map(Number);
        
        month+= termMap[termType];
        
        while(month > 12){
            month -= 12;
            year+=1;
        }
        
        if (year < todayYear || 
            (year === todayYear && month < todayMonth) || 
            (year === todayYear && month === todayMonth && day <= todayDay)) {
            answer.push(index + 1); // 개인정보 번호 추가
        }
    })
    
    return answer;
}