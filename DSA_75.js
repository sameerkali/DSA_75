// let array1 = ["a", "b", "c", null, "d"];
// let array2 = ["v", "q", "x", "z"];

// function fun1(array1, array2) {
//   let map = {};
//   for (let index = 0; index < array1.length; index++) {
//     if (!map[array1[index]]) {
//       const item = array1[index];
//       map[item] = true;
//     }
//  }
//
// [index2]]) {
//       return true;

//   for (let index2 = 0; index2 < array2.length; index2++) {
//     if (map[array2[index2]]) {
//       return true;
//     }
//   }
//   return false;
// }

// if (fun1(array1, array2)) console.log("true");
// else console.log("false");

///////////////////////////////////////-----DSA-----////////////////////////////////////////////////////

//                                     01 - two sum

// let element = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let key = 19;
// let found = false;

// for (let i = 0; i <= element.length; i++) {
//   for (let j = i; j <= element.length; j++) {
//     if (element[i] == key - element[j]) {
//       found = true;
//       console.log(key + " " + " " + "found at" + "[" + i + "," + j + "]");
//       break;
//     }
//   }
// }
// if (!found) console.log("not found");

//                                    02 Best Time to Buy and Sell Stock //////////////////////////////////////

// my solution O(n^2)
// let stocks = [1, 3, 10, 5, 2, 6, 7, 4, 8, 9];
// let profit = [];

// for (let i = 0; i < stocks.length; i++) {
//   for (let j = i; j <= stocks.length; j++) {
//     profit.push(stocks[i] + stocks[j]);
//   }
// }
// // console.log(profit);
// let mainProfit = 0;
// for (let i = 0; i < profit.length; i++) {
//   if (profit[i] > mainProfit) {
//     mainProfit = profit[i]
//   }
// }
// console.log("the mazimum profit you make in this case : " + mainProfit);

// optimised code O(n)

// function maxProfit(prices) {
//   let minPrice = Infinity;
//   let maxProfit = -Infinity; // or 0

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     } else if (prices[i] - minPrice > maxProfit) {
//       maxProfit = prices[i] - minPrice;
//     }
//   }

//   return maxProfit;
// }

// // Example usage:
// let stockPrices = [9, 3, 10, 1, 5, 12, 6, 7, 4, 8, 1];       //-- ans 11
// let profit = maxProfit(stockPrices);
// console.log("Maximum profit: " + profit);

// working code
// const maxProfit = (prices) => {
//     if (prices.length < 2) {
//       // There must be at least two prices to make a profit.
//       return 0;
//     }

//     let minPrice = prices[0]; // Initialize the minimum price to the first day's price.
//     let maxProfit = 0; // Initialize the maximum profit to zero.

//     for (let i = 1; i < prices.length; i++) {
//       // Calculate the potential profit if we sell on the current day.
//       const potentialProfit = prices[i] - minPrice;

//       // Update maxProfit if the potential profit is greater.
//       maxProfit = Math.max(maxProfit, potentialProfit);

//       // Update minPrice if the current price is lower than the previous minimum.
//       minPrice = Math.min(minPrice, prices[i]);
//     }

//     return maxProfit;
//   };

//                                    03 Contains Duplicate

// let findDuplicate = (arr) => {
//   let a = arr[0];
//   let b = arr.length;
//   for (let c = 0; c < arr.length; c++) {
//     if (a === b) return true;
//     a++,b--;
//  }
//   return false;
// };

// let arr = [9, 3, 10, 1, 5, 8, 12, 6, 7, 4, 8, -2, 3, 0]; //-- ans Duplicate not found --- wrong ans
// let duplicate = findDuplicate(arr);
// if (duplicate) console.log("Duplicate found");
// else console.log("Duplicate not found");

// optimized code O(n) chatGPT

// let findDuplicate = (arr) => {
//   let visited = {}; // Object to keep track of visited elements

//   for (let i = 0; i < arr.length; i++) {
//     if (visited[arr[i]]) {
//       // If the element already exists in 'visited'
//       return true; // Return true to indicate a duplicate is found
//     }
//     visited[arr[i]] = true; // Mark the element as visited in 'visited' object
//   }

//   return false; // If no duplicates found, return false
// };

// let arr = [9, 3, 10, 1, 5, 8, 12, 6, 7, 4, 8, -2, -3, 0];
// let duplicate = findDuplicate(arr); // Check if duplicate exists

// if (duplicate) {
//   console.log("Duplicate found");
// } else {
//   console.log("Duplicate not found");
// }

//                                    03 Contains Duplicate ////////////////////////////////////// 03/06/2023

// // method  01 //----------

// function containDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] == arr[j]) return true;
//     }
//   }
//   return false;
// }

// let arr = [9, 3, 10, 1, 5, 8, 12, 6, 7, 4, 8, -2, -3, 0];
// if (containDuplicate(arr)) console.log("contain");
// else console.log("not contain");

// // method  02 //----------

// function containDuplicate(arr) {
//   let slow = 0;
//   let fast = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     if(slow == fast) return true
//     slow++
//     fast--
//   }
//   return false
// }

// // let arr = [9, 3, 10, 1, 5, 8, 12, 6, 7, 4, 8, -2, -3, 0];
// let arr = [9, 3, 10, 1, 5];
// if (containDuplicate(arr)) console.log("contain");
// else console.log("not contain");

//                                    04 replace duplicate with space in string //////////////////////////////////////

// function duplicateToWhitespace(str) {
//   let slow = 0;
//   let fast = str.length;
//   for (let i = 0; i < str.length; i++) {
//     if (slow == fast) console.log(str[i]);
//     slow++;
//     fast--;
//   }
// }

// let str = "sameerfaridi";
// console.log(duplicateToWhitespace(str));                      wrong answer i will do it later

//                                    05 Product of Array Except Self	 //////////////////////////////////////

// function productExceptSelf(nums) {          //right answer chatGPT
//     const n = nums.length;
//     const output = new Array(n);

//     let leftProduct = 1;
//     for (let i = 0; i < n; i++) {
//       output[i] = leftProduct;
//       leftProduct *= nums[i];
//     }

//     let rightProduct = 1;
//     for (let i = n - 1; i >= 0; i--) {
//       output[i] *= rightProduct;
//       rightProduct *= nums[i];
//     }

//     return output;
//   }

//   const nums = [1, 2, 3, 4];
//   console.log(productExceptSelf(nums));

//////////////////////// wrong answer slef-----------------------------

// var productExceptSelf = function(nums) {
//     let ans = [];
//     for(let i = 0 ; i < nums.length-1; i++ ){
//         let mater = 0;
//         for(let j = 0; j < nums.length-1; i++){
//             if(nums[i] == nums[j]) continue;
//             else mater *= nums[j]
//         }
//         asn += mater;
//     }
//     return ans
// };
// const nums = [1, 2, 3, 4];
// productExceptSelf(nums)

//                                    05 Maximum Subarray	 /////////// 05_06_2023///////////////////////////

//method 01

// let maxSubArray = (arr) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] + arr[j] > max) {
//         max = arr[i] + arr[j];
//       }
//     }
//   }
//   return max;
// };

// let arr = [1,2,3,4,5,6,7,8,9,-1,-2,-4,-5,-6,-7,-9] // 17
// // let arr = [10, 20, 30, 40, 50, 100,-2,-4,-5,-6,-7,-9];  // 150
// console.log(maxSubArray(arr));

//method 02 wrong

// let maxSubArray = (nums) => {
//     let max = -Infinity;
//     let temp = 0;
//     for (let i = 0; i < nums.length; i++) {
//       temp += nums[i];
//       if (temp > max) max = temp;
//       if (temp < 0) temp = 0;
//     }
//     return max;
//   };

// //   let arr = [5, 4, -1, 7, 8];
// let arr = [10, 20, 30, 40, 50, 100,-2,-4,-5,-6,-7,-9] // answer should be 150 , But in this example answer is 250
//   console.log(maxSubArray(arr));

//                                    05 check strign rotated or not	 /////////// 06_06_2023///////////////////////////

// let str1 = "sameer";
// let str2 = "eersam";

// if (str1.length === str2.length && (str1 + str2).indexOf(str2)) {
//   console.log("rotated");
// } else {
//   console.log(" not rotated");
// }

//                                    05 find duplicate	 //////////////////////////////////////

// let name1 = "sameer faridi";
// for (let i = 0; i < name1.length; i++) {
//     for(let j = i+1; j < name1.length; j++){
//         if(name1[i] === name1[j]) console.log('duplicates are : ' + name1[j])
//     }
// }

//method 2 ( not working )

// let name = "sameer faridi";
// let name1 = name.prototype.trim();
// console.log(name1)
// let a = 0;
// let b = 1;
// for (let i = 0; i < name1.length; i++) {
//   if (a == b) console.log("duplicates are : " + b);

//   a++;
//   b++;
// }

//method 3 ( working )

// let name1 = "sameer faridi";
// let name1 = ["sa", "saa", "ssameer", "sameer", "sam", "sa"];
// let duplicates = new Set();
// for (let i = 0; i < name1.length; i++) {
//   let currentChar = name1[i];
//   if (duplicates.has(currentChar)) {
//     console.log("Duplicate found: " + currentChar);
//   } else {
//     duplicates.add(currentChar);
//   }
// }
// duplicates.delete(currentChar);
// duplicates.has(currentChar);
// duplicates.size(currentChar);
// duplicates.values(currentChar);
// duplicates.forEach(currentChar);
// use [] for store data in arrays
// EX--
// let arr = [1,2,3,4,5,56,67,32,7,8,8,12,2]
// let duplicates = [ ...new Set(arr)];

//////////////////////////////////// 05 anagram or not	 ////////////////////////////////////////////////////////////////

// method 01 working
// let str1 = "sameer";
// let str2 = "measer";
// let arr1 = str1.split("").sort();
// let arr2 = str2.split("").sort();
// for (let i = 0; i < arr1.length; i++)
//   if (arr1[i] === arr2[i]) {
//     console.log("anagram");
//     break;
//   }

// method 02 working
// let str1 = "sameer";
// let str2 = "measer";
// console.log(str1.split(""));
// let arr1 = str1.split("").sort().join('');
// let arr2 = str2.split("").sort().join('');
// if (arr1 === arr2) {
//   console.log("anagram");
// }
/* join convert arr to normal string (before -- ['a',    'ab', 'abc','abcd', 'b',  'bc','bcd',  'c',  'cd','d' ] , after using join -- a,ab,abc,abcd,b,bc,bcd,c,cd,d)*/

//////////////////////////////////// 05 palindrome or not	 ////////////////////////////////////////////////////////////////

// let str1 = "carrac";
// let arr1 = str1.split("");
// let start = 0;
// let end = arr1.length - 1;
// let isPalindrome = true;

// while (start < end) {
//   if (arr1[start] !== arr1[end]) {
//     isPalindrome = false;
//     break;
//   }
//   start++;
//   end--;
// }

// if (isPalindrome) console.log("palindrome");
// else console.log("not palindrome");

//////////////////////////////////// 05 all possible palindrome substring	 ////////////////////////////////////////////////////////////////

// let generateSubstrings = (str) => {
//   let container = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//         let sunstring = str.slice(i, j)
//         if(isPalindrome(sunstring)){
//       container.push(sunstring);
//     }
//     }
//   }
//   return container;
// };

// let isPalindrome = (str) => {
//   let start = 0;
//   let end = str.length - 1;
//   while (start < end) {
//     if (str[start] !== str[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true;
// };

// let str = "abacdc";
// if(generateSubstrings(str));
// console.log(generateSubstrings(str));

//////////////////////////////////// 05 first nonrepeating element in string	 ////////////////////////////////////////////////////////////////
// copied (dident getit)
// function findFirstNonRepeatingElement(str) {
//     const charFrequency = {};

//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       charFrequency[char] = (charFrequency[char] || 0) + 1;
//     }

//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (charFrequency[char] === 1) {
//         return char;
//       }
//     }
//     return null;
//   }

//   const str = "abacddbec";
//   console.log(findFirstNonRepeatingElement(str));

// easy solution (bad solution)

// let firstNonrepeatingChar = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
//       return str.charCodeAt(i);
//       break;
//     }
//   }
// };

// let str = "sameerfaridi";
// console.log(firstNonrepeatingChar(str))

//////////////////////////////////// 05 392. Is Subsequence	 ////////////////////////////////////////////////////////////////

// let isSubsequence = (s, t) => {
//   if (s.length > t.length) return false;
//   let subsequence = 0
//   for (let i = 0; i < t.length; i++) {
//     if (s[subsequence] == t[i]) {
//       subsequence++;
//     }
//   }
//   return subsequence === s.length;
// };
// let stringA = "sa";
// let stringB = "sameer";
// if (isSubsequence(stringA, stringB)) {
//   console.log("Yes it is subSequence");
// }

//////////////////////////////////// 05 rotation of the string///////////////////////////////////////////////////////////////
// let stringB = "sameer";
// stringB.substring(3);
// console.log( stringB.substring(2)+ stringB.substring(0,2)) //Right rotation
// console.log( stringB.substring(4)+ stringB.substring(0,4)) //Left Rotation

//////////////////////////////////// 05 Reverse string///////////////////////////////////////////////////////////////

// it is correct on leetcode but here it is showing wr0ng answer

// let stringForReverse = "sameer";
// let l = 0;
// let r = stringForReverse.length-1;
// let temp = []
// while(l < r){
//     temp = stringForReverse[l];
//     stringForReverse[l++] = stringForReverse[r];
//     stringForReverse[r--] = temp;
// }
// console.log(temp)

//attempt 01 correct

// const reverseAString = (str) => {
//   let reversedString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }
//   return reversedString;
// };

// let str = "RacecaR";
// console.log(reverseAString(str));

//////////////////////////////////// 06 Maximum Product Subarray 07 June 2023 ////////////////////////////////////////////////////////////////

//I try without any reference

// const MaximumProductSubarray = (arr) => {
//   let collection = 1;
//   // console.log(collection)
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       for (let k = i; k <= j; k++) {
//         collection *= arr[k];
//         //   collection.push(arr[i] * arr[j])
//         // console.log(arr[i] * arr[j]);
//       }
//     }
//   }
//   return collection;
// };
// let arr = [4, 3, 2, 1];
// console.log(MaximumProductSubarray(arr));

// after watching striver's video ( striver bhaiya zindabaad )

// const MaximumProductSubarray = (arr) => {
//   let pre = 1;
//   let suff = 1;
//   let ans = -Infinity;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     if (pre == 0) pre = 1;
//     if (suff == 0) suff = 1;

//     pre *= arr[i];
//     suff *= arr[n - i - 1];
//     ans = Math.max(ans, Math.max(pre, suff));
//   }
//   return ans;
// };
// let arr = [4, 3, 2, 1, 0, 4, 3, -2, -2];
// console.log(MaximumProductSubarray(arr));

////////////////// 06 leetcode 1351. Count Negative Numbers in a Sorted Matrix, 08 June 2023 ////////////////////

// const countNegatives = (grid) => {
//   let count = 0;
//   let n = grid.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] < 0) count++;
//     }
//   }
//   return count;
// };

// let grid = [
//   [4, 3, 2, -1],
//   [3, 2, 1, -1],
//   [1, 1, -1, -2],
//   [-1, -1, -2, -3]
// ];
// console.log(countNegatives(grid));

////////////////// 744. Find Smallest Letter Greater Than Target  09 June 2023////////////////////

// var nextGreatestLetter = function (letters, target) {
//   for (let i = 0; i <= letters.length-1; i++) {
// console.log(letters[i]);
//     if (letters[i] > target) {
//       if (letters[i] == target) {
//         return letters[i + 1];
//       }
//     }
//   }
// };

// const nextGreatestLetter = (letters, target) => {
//   let set = new Set(letters);
//   for (let c of letters) {
//     if (c > target) return c;
//   }
//   return letters[0];
// };

// let letters = ["a", "b", "c", "d"];
// let target = "a";
// console.log(nextGreatestLetter(letters, target));

////////////////////////////// 12 June 2k23 Govind bhai ka question////////
// let c = {
//   greeting : "hai",
// }
// let d;
// d = c;
// // c.greeting = 'hello'
// console.log(d.greeting);

////////////////////////////// 13 June 2k23 aaj man hi nhi kia question krne ka////////
////////////////////////////// 14 June 2k23 aaj time nhi milaa questions krne ka////////
////////////////////////////// 16 June 2k23 aaj time nhi milaa questions krne ka////////
////////////////////////////// 19 June 2k23 aaj pura din waste kr dia par man nhi kia questions krne ka////////

// let isSubsequence = (s, t) => {
//   if (s.length > t.length) return false;
//   let subsequence = 0;
//   for (let i = 0; i < t.length; i++) {
//     if (s[subsequence] == t[i]) {
//       subsequence++;
//     }
//   }
//   return subsequence === s.length;
// };
// let stringA = "samee";
// let stringB = "sameer";
// if (isSubsequence(stringA, stringB)) console.log("Yes it is subSequence");
// else console.log("nhi hai");
////////////////////////////// 20 June 2k23 aaj pura din waste kr dia par man nhi kia questions krne ka////////
// var nextGreatestLetter = function (letters, target) {
//   for (let i = 0; i <= letters.length-1; i++) {
// console.log(letters[i]);
//     if (letters[i] > target) {
//       if (letters[i] == target) {
//         return letters[i + 1];
//       }
//     }
//   }
// };

// const nextGreatestLetter = (letters, target) => {
//   let set = new Set(letters);
//   for (let c of letters) {
//     if (c > target) return c;
//   }
//   return letters[0];
// };

// let letters = ["a", "b", "c", "d"];
// let target = "a";
// console.log(nextGreatestLetter(letters, target));

////////////////////////////// 21 June 2k23 bhai maa kasam bilkull time nhi mil rahaa ////////
////////////////////////////// 22 June 2k23 Time hi nhi milaa vmro ////////
////////////////////////////// 23 June 2k23 kuchh bhe ho jae kamse kam revision toh kr hi lunga aaj ////////

// const countNegatives = (grid) => {
//   let count = 0;
//   let n = grid.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] < 0) count++;
//     }
//   }
//   return count;
// };

// let grid = [
//   [4, 3, 2, -1],
//   [3, 2, 1, -1],
//   [1, 1, -1, -2],
//   [-1, -1, -2, -3]
// ];
// console.log(countNegatives(grid));

/////////////////////////////////////////////////////2/7/23
// const MaximumProductSubarray = (arr) => {
//   let pre = 1;
//   let suff = 1;
//   let ans = -Infinity;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     if (pre == 0) pre = 1;
//     if (suff == 0) suff = 1;

//     pre *= arr[i];
//     suff *= arr[n - i - 1];
//     ans = Math.max(ans, Math.max(pre, suff));
//   }
//   return ans;
// };

// let grid = [
//   [4, 3, 2, -1],
//   [3, 2, 1, -1],
//   [1, 1, -1, -2],
//   [-1, -1, -2, -3]
// ];
// console.log(countNegatives(grid));

////////////////////////////// 03 july 2k23 procrestration ////////
// var nextGreatestLetter = function (letters, target) {
//   for (let i = 0; i <= letters.length-1; i++) {
// console.log(letters[i]);
//     if (letters[i] > target) {
//       if (letters[i] == target) {
//         return letters[i + 1];
//       }
//     }
//   }
// };

// const nextGreatestLetter = (letters, target) => {
//   let set = new Set(letters);
//   for (let c of letters) {
//     if (c > target) return c;
//   }
//   return letters[0];
// };

// let letters = ["a", "b", "c", "d"];
// let target = "a";
// console.log(nextGreatestLetter(letters, target));

//////////////////////////////////// roadside coder array ////////////////////////////
// "strict";
// console.log('sameer')

// [ARRAYS] ----------------------------------------------------------------------
// Q1 find the secound largest element in array

// testcases
// arr = [12, 35, 1, 10, 34, 1];
// arr = [10, 5, 10];

// ----------------bruteForce  01
// let secoundLargest = (arr) => {
//   const allUnique = Array.from(new Set(arr));

//   allUnique.sort((a, b) => b - a);

//   if (allUnique.length >= 2) {
//     return allUnique[1];
//   } else {
//     return -1;
//   }
// };
// arr1 = [12, 35, 1, 10, 34, 1];
// arr2 = [10, 5, 10];
// console.log(secoundLargest(arr2));
// time complexity O( n log n) -- because sorting in js inbuild is take O(nlogn) and that is the highrst in this question

// Optimized solution

// const secoundLargestOptimized = (arr) => {
//   let largest = Number.NEGATIVE_INFINITY;
//   let secoundLargest = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > largest) {
//       secoundLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] != largest && arr[i] > secoundLargest) {
//       secoundLargest = arr[i];
//     }
//   }
//   return secoundLargest;
// };
// arr3 = [12, 35, 1, 10, 34, 1];
// console.log(secoundLargestOptimized(arr3));

// ============ 2sum =============== 10/09/2023

// var twoSum = function (nums, target) {
//     let start = nums[0];
//     let end = nums.length - 1;
//     for (let i = 0; i < nums.length; i++){
//         if(nums[start] + nums[end] === target){
//             return [nums[start],nums[end]]
//             start++;
//             end--;
//         }else{
//             return false;
//         }

//     }
//   };
// var twoSum = function (nums, target) {
//     let ans = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 ans.push(i);
//                 ans.push(j);
//                 return ans;
//             }
//         }
//     }
//         return ans;
// };

// let nums = [2, 3, 4, 5, 8];
// console.log(twoSum(nums, 5));

//121. Best Time to Buy and Sell Stock

// const maxProfit = (p) => {
//     let profit = [];

//     for (let i = 0; i < p.length; i++) {
//         for (let j = 0; j <= p.length; j++) {
//             profit.push(i + j)
//         }
//     }
//     console.log(profit)

//     let ans = 0;
//     for (let i = 0; i < profit.length; i++) {
//         if (profit[i] > ans) {
//             ans = profit[i]
//         }
//     }
//     return ans;

// };

// let nums = [7,1,5,3,6,4]
// console.log(maxProfit(nums));

// correct code (chatGpt)
// const maxProfit = (prices) => {
//     if (prices.length < 2) {
//       // There must be at least two prices to make a profit.
//       return 0;
//     }

//     let minPrice = prices[0]; // Initialize the minimum price to the first day's price.
//     let maxProfit = 0; // Initialize the maximum profit to zero.

//     for (let i = 1; i < prices.length; i++) {
//       // Calculate the potential profit if we sell on the current day.
//       const potentialProfit = prices[i] - minPrice;

//       // Update maxProfit if the potential profit is greater.
//       maxProfit = Math.max(maxProfit, potentialProfit);

//       // Update minPrice if the current price is lower than the previous minimum.
//       minPrice = Math.min(minPrice, prices[i]);
//     }

//     return maxProfit;
//   };
// let nums = [7,1,5,3,6,4]
// console.log(maxProfit(nums));

//! Practice js string and array questions Date: 13-12-2023

//Reverse a String:1
let str = "sameer";

const reverse = (str) => {
  return str.split("").reverse().join("");
};
// console.log(reverse(str));

// Check for Palindrome:2
let pal = "samas";

const palindrome = (str) => {
  return str.split("").reverse().join("") === str;
};
// console.log(palindrome(pal));

// Find the Longest Word:3

const words = ["sameer", "samas", "lls", "sdfsdfsdfsdf", "sa"];

const checkLongestWord = (words) => {
  const lengthOfWords = [];
  words.forEach((word) => lengthOfWords.push(word.length));

  const sorted = lengthOfWords.sort();

  return sorted[0];
};
// console.log(checkLongestWord(words));

//Count Vowels:4
const vowels = "hello world";
const countVowels = (vowels) => {
  let vowelsLength = vowels.match(/[aeiou]/gi);
  return vowelsLength ? vowelsLength.length : 0;
};
// console.log(countVowels(vowels));

// Sum of Array Elements:5

const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const countElement = (elements) => {
  let additionOfElements = 0;
  for (let i = 0; i < elements.length; i++) {
    additionOfElements = additionOfElements + elements[i];
  }
  return additionOfElements;
};

// console.log(countElement(elements));

// Find Maximum and Minimum in an Array:6
const elements2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const findThelargestAndSmallest = (elements2) => {
  const sortedElements = elements2.slice().sort((a, b) => a - b);
  let min = sortedElements[0];
  let max = sortedElements[sortedElements.length - 1];
  return [min, max];
};
const findThelargestAndSmallest2 = (elements2) => {
  let max = Math.max(...elements);
  let min = Math.min(...elements);
  return [min, max];
};
// console.log(findThelargestAndSmallest2(elements2));
// console.log(findThelargestAndSmallest(elements2));

//Remove Duplicates from an Array:7
const elements3 = [1, 4, 4, 5, 6, 5, 6, 10];

const removeDuplicatesFromArray = (elements3) => {
  return [...new Set(elements3)];
};
const removeDuplicatesFromArray2 = (elements3) => {
  let unique = [];
  for (let i = 0; i < elements3.length; i++) {
    if (!unique.includes(elements3[i])) {
      unique.push(elements3[i]);
    }
  }
  return unique;
};
// console.log(removeDuplicatesFromArray(elements3));
// console.log(removeDuplicatesFromArray2(elements3));

//Check if Array is Sorted:8

const elements4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const checkSorted = (elements4) => {
  let check = elements4.slice().sort((a, b) => a - b);
  return JSON.stringify(check) === JSON.stringify(elements4);
};
// console.log(checkSorted(elements4));

//Count Vowels:9
const vowels2 = "hello world";
const countVowels2 = (vowels) => {
  let vowelsLength = vowels.match(/[aeiou]/gi);
  return vowelsLength ? vowelsLength.length : 0;
};
// console.log(countVowels2(vowels2));

var evaluateTree = function(root) {
  function helper(node) {
      if (node.val === 0 || node.val === 1) {
          return node.val === 1;
      } else if (node.val === 2) {
          return helper(node.left) || helper(node.right);
      } else if (node.val === 3) {
          return helper(node.left) && helper(node.right);
      }
      return false;
  }
  
  return helper(root);
};