const stocks = {Apple: "AAPL", Microsoft: "MSFT", Google: "GOOG"};

const portfolio = {AAPL: 10, MSFT: 0, GOOG: 4};

function addStock(portfolio, stock, shares) {
  portfolio[stock] += shares;
}

addStock(portfolio, stocks.Microsoft, 20);
addStock(portfolio, stocks.Apple, 30);

console.log(portfolio);