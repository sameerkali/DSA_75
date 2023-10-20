const isPalindrome = (s) => {
  let filteredString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  //   console.log(filteredString);
  let start = 0;
  let end = filteredString.length - 1;
  while (start < end) {
    if (filteredString[start] !== filteredString[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
