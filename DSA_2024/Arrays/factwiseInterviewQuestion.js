/*
 In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array `cardPoints`.
Your score is the sum of the points of the cards you have taken.
Given the integer array `cardPoints` and the integer k, return the maximum score you can obtain.
 
Input: cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3  
   Output: 12  
 
 */

//    my solution

// // console.log("Interview at FactWise");

// const pickACar = (arr, k) => {
//   let car = [];
//   let n = arr.length;
//   let first = arr[0];
//   let last = arr[n - 1];
//   for (let i = 0; i <= k - 1; i++) {
//     if (arr[i] > arr[last]) {
//       // 2 2
//       car.push(arr[first]);
//       first++;
//     } else {
//       car.push(arr[last]);
//       last--;
//     }
//   }
//   return car;
// };

// // possible patterns : 123, 121, 116, 165

// let cardPoints = [1, 2, 3, 4, 5, 6, 1];
// let k = 3;
// console.log(pickACar(cardPoints, k));
// //   Output: 12



// ----------------------------------------------------------------------------------------------------------------------------
// actual answer
//leetcode : 1423. Maximum Points You Can Obtain from Cards


const maxScore = (cardPoints, k) => {
    let n = cardPoints.length;
    let totalSum = cardPoints.reduce((acc, curr) => acc + curr, 0); // Total sum of all cards
  
    if (k === n) return totalSum; // If k equals the number of cards, return the total sum
  
    // Find the minimum sum of 'n - k' cards in the middle
    let windowSize = n - k;
    let currentWindowSum = cardPoints.slice(0, windowSize).reduce((acc, curr) => acc + curr, 0);
    let minWindowSum = currentWindowSum;
  
    // Slide the window across the array and find the minimum window sum
    for (let i = windowSize; i < n; i++) {
      currentWindowSum += cardPoints[i] - cardPoints[i - windowSize];
      minWindowSum = Math.min(minWindowSum, currentWindowSum);
    }
  
    // Maximum score is the total sum minus the minimum window sum
    return totalSum - minWindowSum;
  };
  
  // Example usage:
  let cardPoints = [1, 2, 3, 4, 5, 6, 1];
  let k = 3;
  console.log(maxScore(cardPoints, k)); // Output: 12
  