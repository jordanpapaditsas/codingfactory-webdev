const nums = [1, 2, 3, 4, 5];

let sum = nums.reduce((total, value) => total + value, 0);

// console.log('Sum = ', sum);


let avg = nums.reduce((total, value, _, { length }) => (total + value) / length);

console.log(avg);