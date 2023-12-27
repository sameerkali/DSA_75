var minCost = function (colors, neededTime) {
  let minTime = 0;

  for (let i = 0; i < colors.length - 1; i++) {
    if (colors[i] == colors[i + 1]) {
      let currMax = neededTime[i];
      let minSum = neededTime[i];
      while (i + 1 < colors.length && colors[i] == colors[i + 1]) {
        minSum += neededTime[i + 1];
        currMax = Math.max(currMax, neededTime[i + 1]);
        i++;
      }
      minSum -= currMax;
      minTime += minSum;
    }
  }
};

return minTime;
