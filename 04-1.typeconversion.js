const prompt = require('prompt-sync')({sigint:true});

const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어 몇점?");
const result = (mathScore + engScore) / 2;

console.log(typeof mathScore);
//입력받는 형태는 문자형이다
console.log(result + "점");