function util() {
  let res = 1;
 function square(n) {
    return n * n + res;
  }

  return square;
}

const mySquare = util();

let square4 = mySquare(4);
console.log(square4);