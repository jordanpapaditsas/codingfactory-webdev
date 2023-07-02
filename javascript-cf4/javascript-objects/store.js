const store = `[{"id": "pro1chr", 
                "fields": {
                  "company": "ikea",
                  "colors": ["#f15025", "#222"],
                  "featured": true,
                  "price": 888,
                  "genre": "white-back chair"
                }},
                {"id": "pro2chr", 
                "fields": {
                  "company": "ikea",
                  "colors": ["#f15025", "#222"],
                  "featured": false,
                  "price": 888,
                  "genre": "white-back chair"
                }}]`;

function fetchProducts() {
  const products = JSON.parse(store);
  return products;
}

function displayProducts(products) {
  products.map(product => {
    let {fields} = product;
    let {company, price, genre} = fields;
    console.log(company, price, genre);
  })
}

const fetchedProducts = fetchProducts();
displayProducts(fetchedProducts);