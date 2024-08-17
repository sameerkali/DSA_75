const saperateTheWords = w => {
  let convertTheWords = w.split("");
  let ans = [];
  // let test = 0
  for (let i = 0; i < convertTheWords.length; i++) {
    // test+=1
    if (convertTheWords[i] === convertTheWords[i].toUpperCase()) {
      if(i !== 0) {
        ans.push("_");
      }
    }
    ans.push(convertTheWords[i]);
  }

  return `ye hai ans : ${ans.join("")}`;
};

let word = "HiiMyNameIsSameerFaridi";
console.log(saperateTheWords(word)); 
