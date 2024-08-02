//전역변수와 지역변수
let msg = "welcome";
console.log(msg);

function sayHello(name) {
  let msg = "hello";
  console.log(msg + ' ' + name);
}

sayHello('hyeonho');