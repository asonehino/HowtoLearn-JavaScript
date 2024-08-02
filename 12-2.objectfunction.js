function makeObject(name, age){ 
  return {
    name: name,
    age: age,
    hobby: 'football'
  }
}

const hyeonho = makeObject("hyeonho, 18");
console.log(hyeonho);

console.log('age' in hyeonho);
console.log('birthdat' in hyeonho);