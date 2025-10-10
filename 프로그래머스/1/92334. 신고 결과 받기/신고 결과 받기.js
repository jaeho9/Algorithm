function solution(id_list, report, k) {
    var answer = [];
    
    const idx = new Map();
    id_list.forEach((id, i) => idx.set(id, i));
    
    const unique = new Set(report);
    
    const reportedCnt = Array(id_list.length).fill(0);
    for(const line of unique){
        const [, reported] = line.split(' ');
        reportedCnt[idx.get(reported)]++;
    }
    
    const mailCnt = Array(id_list.length).fill(0);
    for(const line of unique){
        const [reporter, reported] = line.split(' ');
        if(reportedCnt[idx.get(reported)] >= k){
            mailCnt[idx.get(reporter)]++;
        }
    }
    
    return mailCnt;
}