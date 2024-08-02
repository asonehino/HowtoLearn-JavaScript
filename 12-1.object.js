const superman = {
  name: 'clark',
  age:33,
}

superman.hairColor = 'black';
superman['hobby'] = 'football';

delete superman.age;

console.log(superman.name);
console.log(superman);