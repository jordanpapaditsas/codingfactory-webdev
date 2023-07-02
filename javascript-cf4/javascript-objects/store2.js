const store = [{product: "Oranges", city: "Lamia"},
                {product: "Apples", city: "Volos"},
                {product: "Milk", city: "Athens"},
                {product: "Honey", city: "Lamia"}
];

const cities = ['all', ...new Set(store.map(product => product.city))];

console.log(cities);

 