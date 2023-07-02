function add(a, b) {
  if (a && b) {
    return a + b;
  } else 
    return 0;
}

function add(a, b) {
  a = a || 0;
  b = b || 0;

  return a + b;
}


// default parameters
function add(a = 0, b = 0) {
  return a + b;
}

console.log(add(3, 8));