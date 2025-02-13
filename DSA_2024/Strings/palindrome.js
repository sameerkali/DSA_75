// const isPalindrome = (w) => {
// let reverse = w.split('').reverse().join('');
// let forword = w.split('').join('')
// return reverse === forword
// }

// console.log(isPalindrome("samas"))

function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("racecar"));
