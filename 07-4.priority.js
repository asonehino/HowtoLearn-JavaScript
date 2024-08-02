//우선순위
//남자이고, 이름이 hyeonho이거나 18이면 통과

const prompt = require('prompt-sync')({sigint:true});
const gender = prompt("성별을 입력하세요: ");
const name = prompt("이름을 입력하세요: ");
const age = prompt("나이를 입력하세요: ");

if(gender == 'M') {
  if(name == 'hyeonho' || age == 18) {
    console.log('통과입니다.');
  }
  else {
    console.log('탈락입니다.');
  }
}
else {
  console.log('탈락입니다.');
}