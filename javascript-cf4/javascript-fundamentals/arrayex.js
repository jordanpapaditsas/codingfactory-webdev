// let arr = [1, 2, 3, 4, 5];

// function removeItem(arr) {
//   arr.splice(1, 1);
// }

// removeItem(arr);

// console.log(arr);


const arr = [1, 2, 3, 4];


 const removeFromArr = function(arr, val) {
  if (!arr || !val) return -1;

  let pivot = arr.indexOf(val);
  arr.splice(pivot, 1);
}

removeFromArr(arr, 2);
console.log(arr);