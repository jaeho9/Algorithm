function solution(s) {
  let regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}