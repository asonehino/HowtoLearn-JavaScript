let days = ['수', '목', '금'];

days.push('토');
days.unshift('일', '월', '화');

for (let i=0; i<days.length; i++) {
  console.log(days[i] + '요일');
}

for(let day of days) {
  console.log(day);
}