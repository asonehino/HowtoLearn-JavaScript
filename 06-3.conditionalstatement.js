const prompt = require('prompt-sync')({sigint:true});
const age = prompt("나이를 입력하세요:");

if(age>19) {
  console.log('환영합니다.');
}
else if(age==19) {
  console.log('반갑구만요.');
}
else {
  console.log('나가시오.');
}