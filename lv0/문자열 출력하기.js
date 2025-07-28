// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181952
// 문제 이름 : 문자열 출력하기

const fs = require('fs');

const str = fs.readFileSync('/dev/stdin').toString().trim();

console.log(str);