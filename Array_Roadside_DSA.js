const { Maximize } = require("@material-ui/icons");

/* Question 1: Truncate the text
 Write a function called truncate that checks the length of a given string str, and if
 it surpasses a specified maximum length, maxlength, it replaces the end of the string
 with the ellipsis character so that the length matches the maximum length
 Input: str = Subscribe to RoadsideCoder
 Output: "Subscribe..."

 Solution :*/
const truncate = (mainString, maxLenght) => {
  if (mainString.length >= maxLenght) {
    let trimedvalue = mainString.trim();
    let finalVersionOfString = trimedvalue.replaceAll(" ", "");
    return `${finalVersionOfString.slice(0, maxLenght)}...`;
  } else {
    return mainString;
  }
};
const mainString = `    Hay Good Morning Brother`;
const maxLenght = 9;
// console.log(truncate(mainString, maxLenght))

// Output : HayGoodMor...

// ----------------------------------------------------------------------

/*  Q2: Palindrome Number, 
   Input: 121 -> True
   Input: 123 -> False 

Solution :
*/

// Define a function to check if a number is a palindrome
const PalindromeNumber = (num) => {
  // Convert the number to a string for easier character comparison
  const numString = num.toString();

  // Initialize pointers for the leftmost and rightmost characters in the string
  let leftPointer = 0;
  let rightPointer = numString.length - 1;

  // Iterate through the string until the pointers cross each other
  while (leftPointer < rightPointer) {
    // Compare characters at the current pointers
    if (numString[leftPointer] !== numString[rightPointer]) {
      return false; // If characters don't match, it's not a palindrome
    }
    // Move the pointers towards each other
    leftPointer++;
    rightPointer--;
  }

  // If the loop completes without returning false, the number is a palindrome
  return true;
};

// Test the PalindromeNumber function with a number
let something = 424;
// console.log(PalindromeNumber(something)); // Output: true

// ----------------------------------------------------------------------

/*  Q3: 461. Hamming Distance, 
   The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
   Given two integers x and y, return the Hamming distance between them. 

   Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
Example 2:

Input: x = 3, y = 1
Output: 1


Solution :
*/

const hammingDistance = function (x, y) {
  x = x.toString(2); // if x === 2 --> 10
  y = y.toString(2); // if x === 9 --> 1001

  //make the length same of x and y
  if (x.length < y.length) {
    while (x.length !== y.length) x = "0" + x;
  } else {
    while (x.length !== y.length) x = "0" + y;
  }
  // Comment (if x === 2 --> 0010)
  // Comment (if x === 9 --> 1001)

  // console.log(x)
  // console.log(y)
  let count = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) count++;
  }
  return count;
};

// console.log(hammingDistance(2, 9));

// ----------------------------------------------------------------------
// Q4 : 242. Valid Anagram
/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false */
// Solution:

// const Anagram = (x, y) => {
//   x = x.split("").sort().join("");
//   y = y.split("").sort().join("");

//   return x === y;
// };
// console.log(Anagram("anagram", "nagaram"));

// Optimized

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

// console.log(isAnagram("sameer", "reemas"));


// BLOG LINK
// https://sameerkali.hashnode.dev/data-structure-string-in-javascript-frontend-interview-helper