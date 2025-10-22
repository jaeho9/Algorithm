function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    
    const cache = []; // LUR 앞이 가장 오래된 뒤가 가장 최근
    let time = 0;
    for(let i=0; i<cities.length; i++){
        const city = cities[i].toLowerCase();
        const idx = cache.indexOf(city); 
        
        if(idx !== -1){ // 없을때
            time += 1;
            cache.splice(idx, 1); // 기존 위치 제거
            cache.push(city); // 최근에 사용한 것으로 이동
        }
        else{ // 있을때
            time += 5;
            if(cache.length === cacheSize){
                cache.shift(); // 가장 앞에 제거
            }
            cache.push(city);
        }
    }
    return time;
}