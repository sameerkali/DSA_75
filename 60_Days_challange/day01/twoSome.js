



const twoSum = function (n, t) {
  let ans = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = i+1; j < n.length; j++) {
      if (n[i] + n[j] === t) {
        ans.push(i, j);
      }
    }
  }
  return ans;
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
