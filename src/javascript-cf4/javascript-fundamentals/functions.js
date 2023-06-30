function add(a, b) {
  return a + b;
}

const add1 = function(a, b) {
  return a + b;
}

const add2 = (a, b) => a + b;

console.log(add(1, 2));
console.log(add1(3, 4));
console.log(add2(5, 8));