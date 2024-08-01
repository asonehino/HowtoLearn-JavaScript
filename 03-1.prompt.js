//nodejs에서는 prompt를 지원하지 않기 때문에
//prompt-sync 모듈이 필요하다
const prompt = require('prompt-sync')({sigint:true});

const name = prompt("이름을 입력하세요:");
console.log("환영합니다, " + name + "님");