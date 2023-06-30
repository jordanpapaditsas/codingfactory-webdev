let arr = [];
let arr2 = [1, 2, 3];
let sparse = [1, , 3];      // Sparse array =  2nd element is undefined.
arr.length = 0;

let arr3 = new Array(4);    // Create an array with 4 undefined elements.
let arr4 = new Array(1, 2, 3);    // 3 elements

let clone = [...arr2];   // Shallow copy
let extended = [...arr2, 8, 9];


let arr5 = Array.of(5);     //  one element with Value of '5'.
let arr6 = Array.from(arr3);      //  Shallow copy ->  array-like object. - NodeList.

for (let i = 0; i < arr.length; i++) {

}

for (const item of arr3) {

}

// arr3.forEach(item => console.log(item))΄

let cities = ['Athens', 'Paris'];
cities.push('London');
cities.unshift('Lamia');
let city = cities.pop()     // get from end.
let city2 = cities.unshift()  // get from start.

  // splice: => remove, insert, update

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.splice(0, 4);          // διαγραφει 4 στοιχεια απο τη θεση 0
nums.splice(2, 1);

let prices = [1, 2, 3, 4, 5];
prices.splice(1, 0, 12);          // insert 1, 12, 2, 3, 4, 5
prices.splice(3, 1, 30);          // update array

 let sliced = prices.slice(0, 2);
 let myArr = new Array(5);        // undefined
 myArr.fill(0);

 let testArr = [1, 2, 3, 4, 5];

 testArr.copyWithin(1, 3, 4);
 