let products = ['Apples', 'Milk', 'Bread'];

let product = products.find(product => product.length <= 3);
let productIndex = products.findIndex(product => product === 'Milk');

if (productIndex !== -1) {
  products.splice(productIndex, 1);
}

console.log(productIndex);


// if (product) {
//   console.log(product);
// } else 
//  console.log('Product not found');