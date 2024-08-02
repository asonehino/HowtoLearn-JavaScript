let hello = 'Hello'; 
console.log('함수 호출 전');
console.log(hello);

function sayHello(name) {
  if(name) {
    hello += `, ${name}`;
  } 
  console.log('함수 내부');
  console.log(hello);
}

sayHello();
sayHello('hyeonho');
console.log('함수 호출 후');
console.log(hello);