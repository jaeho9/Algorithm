function solution(cards1, cards2, goal) {
  let i = 0, j = 0;
  for (const w of goal) {
    if (i < cards1.length && cards1[i] === w) i++;
    else if (j < cards2.length && cards2[j] === w) j++;
    else return "No";
  }
  return "Yes";
}