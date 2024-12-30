function solution(my_string, s, e) {
    var answer = '';
    var str = my_string.substring(s,e+1);
    var newStr = str.split('').reverse().join('');

    answer = my_string.replace(str,newStr);
    return answer;
}