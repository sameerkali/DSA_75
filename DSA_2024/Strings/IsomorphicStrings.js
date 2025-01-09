// paper = title
// [1,1,1,1] = [1,1,1,1] == true

var isIsomorphic = function(w) {
  let isomorphic = [];
  let count = 0;
  for (let i = 0; i < w.length; i++) {
    if(w[i] === w[i + 1]) {
        count++;
    }else{
        isomorphic.push(count)
        count= 0
    }
  }
  return isomorphic
};

const isIsomorphicCompare = (word1, word2) => {
    let a = isIsomorphic(word1).join('')
    let b = isIsomorphic(word2).join('')
    return a === b
}

console.log(isIsomorphicCompare("badc", "baba"))
