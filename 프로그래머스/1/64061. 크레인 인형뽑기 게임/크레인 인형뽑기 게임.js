function solution(board, moves) {
    var answer = 0;
    let basket = []; // 인형을 담을 바구니
    
    moves.forEach((m)=>{
       for(let i=0; i<board.length; i++){
           let tmp = board[i][m-1];
           if(tmp == 0)continue;
           
           if(tmp == basket[basket.length -1]){
               basket.pop();
               answer += 2;
           }
           else{
               basket.push(tmp);
           }
           board[i][m-1] = 0;
           break;
       }
    });
    
    // console.log(board);
    // console.log(moves);
    
    return answer;
}