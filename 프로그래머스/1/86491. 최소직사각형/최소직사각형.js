function solution(sizes) {
    let w = [];
    let h = []; 

    sizes.map((v,i) => {
      w[i]=Math.max(...v) // 큰 값
      h[i]=Math.min(...v) // 작은 값
    })
    
    return Math.max(...w)*Math.max(...h);
}