//사고 싶은 과일을 물어보고 가격 알려주기
//사과: 100원
//바나나: 200원
//키위: 300원
//멜론: 400원
//수박: 500원

const prompt = require('prompt-sync')({sigint:true});
const answer = prompt('원하는 과일은 무엇입니까?');

switch(answer) {
  case '1':
    console.log('사과는 100원입니다.');
    break;
  case '2':
    console.log('바나나는 200원입니다.');
    break;
  case '3':
    console.log('키위는 300원입니다.');
    break;
  case '4':
    console.log('멜론은 400원입니다.');
    break;
  case '5':
    console.log('수박은 500원입니다.');
    break;  
  default:
    console.log('다시 고르시오.');
}
