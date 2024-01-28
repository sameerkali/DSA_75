const maxSubArray = (n) => {
  let max = Number.NEGATIVE_INFINITY,
    len = n.length;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += n[j];
      max = Math.max(sum, max);
    }
  }
  return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
