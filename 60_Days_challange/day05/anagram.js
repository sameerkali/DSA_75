const isAnagram = (s, t) => {
  let a = s.split("").sort().join("");
  let b = t.split("").sort().join("");
  return a === b ? true : false
};

let s = "anagram", t = "nagaram";
console.log(isAnagram(s,t))