const prompt = require('prompt-sync')({sigint:true});

const age = prompt('나이를 입력하세요: ');
const agee = 19 >= age;

if(!agee) {
  console.log('통과');
}
else {
  console.log('실패!!');
}