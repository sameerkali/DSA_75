
var longestPalindrome = function (s) {
  let obj = {};
  let answer = 0;
  for (let c of s) {
    if (!obj[c]) {
      obj[c] = 1;
    }
    else
      obj[c]++;
    if (obj[c] % 2 === 0) {
      answer += 2;
    }
  }
  return s.length > answer ? answer + 1 : answer;
};

console.log(longestPalindrome("sameerfaridi"))