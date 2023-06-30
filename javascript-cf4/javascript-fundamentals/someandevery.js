const products = ['Apples', 'Oranges', 'Milk', 'Honey'];

let isStartsWithA = products.some(p => p.startsWith('A'));

if (isStartsWithA) {
  console.log("Starts with 'A'");
} else {
  console.log('Starts with A not');
}

let areAllValidProducts = products.every(p => p.length >= 2);

if (areAllValidProducts) {
  console.log("All are valid");
} else {
  console.log("All are valid not!");
}