const book = {
  author: {firstname: "Jord", lastname: "Pap."}
}

if (book && book.author) {
  console.log(book.author.lastname);
}

let lastname = book?.author?.lastname;

if (book.hasOwnProperty('author')) {
  console.log(book.author);
}

for (let [k, v] of Object.entries(book.author)) {
  console.log(`${k} : ${v}`);
}

let clonedBook = { ...book }    // Shallow copy 
console.log(clonedBook);