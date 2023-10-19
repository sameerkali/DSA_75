var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  for (let i of prices) {
    if (min < i) max = Math.max(max, i - min);
    else min = i;
  }
  return max;
};
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
