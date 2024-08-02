function inAdult(user) {
  if(!('age' in user) || user.age < 20) {
    return false;
  }
    return true;
}

const hyeonho = {
  name: 'hyeonho',
  age: 18,
}

const gyumin = {
  name: 'gyumin',
  age: 30,
}

const jon = {
  name: 'jon',
  /*
  function inAdult(user) {
    if(user.age<20) {
      return false;
    }
      return true;
  }
  jon은 age가 없어서 undefined라 true로 인식한다.
  */
}

console.log(inAdult(hyeonho));
console.log(inAdult(gyumin));
console.log(inAdult(jon));