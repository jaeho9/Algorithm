function solution(keymap, targets) {
    var answer = [];
    
    let minPress = {}; // 각 문자의 최소 눌러야 하는 횟수를 딕셔너리에 저장 

    // keymap을 순회하면서 각 문자의 최소 눌러야 하는 횟수 계산
    for (let i = 0; i < keymap.length; i++) {
        for (let j = 0; j < keymap[i].length; j++) {
            let char = keymap[i][j];
            if (!minPress[char]) {
                minPress[char] = j + 1; // 문자에 대응되는 누름 횟수 저장
            } else {
                minPress[char] = Math.min(minPress[char], j + 1); // 이미 있는 문자라면 최소 누름 횟수 갱신
            }
        }
    }
    
    // targets 배열을 순회하면서 각 문자열에 필요한 최소 누름 횟수 계산
    for (let i = 0; i < targets.length; i++) {
        let pressCount = 0;
        // target 문자열의 각 문자를 순회
        for (let j = 0; j < targets[i].length; j++) {
            let char = targets[i][j];
            if (minPress[char]) {
                pressCount += minPress[char]; // 문자를 만들 수 있다면 누름 횟수 추가
            } else {
                pressCount = -1; // 문자를 만들 수 없다면 -1로 설정
                break;
            }
        }

        answer.push(pressCount);
    }
         
    return answer;
}