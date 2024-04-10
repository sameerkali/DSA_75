const reverse = str => {
  let collection = {
    1: "a"
  };
  let vovles = str.split("");

  let count = 0;
  for (let i = 0; i < vovles.length; i++) {
    if (
      vovles[i] === "a" ||
      vovles[i] === "e" ||
      vovles[i] === "i" ||
      vovles[i] === "o" ||
      vovles[i] === "u"
    ) {
      collection = {
        i : vovles[i]
      }
    }
  }

  return vovles;
};
const str = "leetcode";
console.log(reverse(str));
// samajh nhi aaya 
