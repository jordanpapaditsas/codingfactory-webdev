const store = [
  {fruit: "Avocado", price: 10},
  {fruit: "Apples", price: 25},
  {fruit: "Bananas", price: 8}
];

function getNewStore(searchValue) {
  const newStore = store.filter(el => {
    let { fruit } = el;
    fruit = fruit.toLowerCase();
    if (fruit.startsWith(searchValue.toLowerCase())) return el;
  })

  return newStore;
}



console.log(getNewStore("A"));