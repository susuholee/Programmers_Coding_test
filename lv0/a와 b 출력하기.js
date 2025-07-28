// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181951
// 문제 이름 : a와 b 출력하기

const fs = require('fs'); // 파일 시스템 모듈 불러오기

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');


const a = parseInt(input[0]);
const b = parseInt(input[1]);


console.log(`a = ${a}`);
console.log(`b = ${b}`);