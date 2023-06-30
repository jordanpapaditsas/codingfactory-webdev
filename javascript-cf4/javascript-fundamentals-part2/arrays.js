const cities = ['Athens', 'London', 'Paris'];
let joined = cities.join(", ");
console.log(joined);


console.log(cities);

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

let sout = "";
for (let city of cities) {
  sout += city + " "
  // console.log(city);
}

console.log(sout);

cities.forEach(city => console.log(city));