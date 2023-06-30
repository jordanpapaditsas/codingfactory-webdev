function starsH10() {
  for (let i = 1; i <= 10; i++) {
    document.write('*');
  }
}

function starsV10() {
  for (let i = 1; i <= 10; i++) {
    document.write("* <br>");
  }
}

function starsHV10() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      document.write("*");
    }
    document.write("<br>");
  }
}