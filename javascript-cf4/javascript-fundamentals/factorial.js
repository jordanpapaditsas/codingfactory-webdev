

function facto(n) {
  let result = 1;
  while (n) {
    result *= n;
    n--;
  }
  return result;
}

console.log(facto(5));