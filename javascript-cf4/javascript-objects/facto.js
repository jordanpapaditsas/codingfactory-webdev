function factorial(n) {
  if (n <= 1) {
    return 1;
  } else 
  return n * factorial(n - 1);    // recursion

  //   return (n <= 1)  ?  1 : n * factorial(n - 1);
}