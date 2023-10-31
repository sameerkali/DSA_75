// var solution = function (isBadVersion) {
//     return function (n):  {
//         let low = 1;
//         let high = n;

//         while (low <= high) {
//             const mid = Math.floor((low + high) / 2);
//             const ans = isBadVersion(mid);
//             ans ? high = mid - 1 : low = mid + 1;
//         }
//         return low;
//     };
// };