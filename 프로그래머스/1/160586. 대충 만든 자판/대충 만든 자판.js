function solution(keymap, targets) {
    var answer = [];
    
    let minPress = {};
    for (let i = 0; i < keymap.length; i++) {
        for (let j = 0; j < keymap[i].length; j++) {
            let char = keymap[i][j];
            if (!minPress[char]) {
                minPress[char] = j + 1;
            } else {
                minPress[char] = Math.min(minPress[char], j + 1); 
            }
        }
    }

    for (let i = 0; i < targets.length; i++) {
        let pressCount = 0;
        
        for (let j = 0; j < targets[i].length; j++) {
            let char = targets[i][j];
            if (minPress[char]) {
                pressCount += minPress[char]; 
            } else {
                pressCount = -1;
                break;
            }
        }

        answer.push(pressCount);
    }
         
    return answer;
}