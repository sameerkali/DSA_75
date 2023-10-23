const search = (arr, t) => {
  let LI = 0;
  let RI = arr.length - 1;

  while (LI < RI) {
    let mid = LI + Math.floor((RI - LI + 1) / 2);
    if (t < arr[mid]) RI = mid - 1;
    else LI = mid;
  }
  return arr[LI] === t ? LI : -1;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 9;
console.log(search(arr, target));
