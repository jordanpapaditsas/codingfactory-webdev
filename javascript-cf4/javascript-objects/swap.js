
// its not working
function swap(a, b) {
  let tmp = a;
  a = b;
  b = tmp;
}

// working
function swap(arr) {
  let tmp = arr[0];
  arr[0] = arr[1];
  arr[1] = tmp;
}

let a = 6;
let b = 10;

swap(a, b);

console.log(arr);