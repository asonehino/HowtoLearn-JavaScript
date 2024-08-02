function sayHello(name) {
  let name1 = name || 'friend';
  let msg = `hello, ${name1}`;
  console.log(msg);
}

sayHello();
sayHello('hyeonho');