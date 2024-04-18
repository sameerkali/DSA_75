// Ques 1: Given an input string s, reverse the order of the words
// Input: "the sky is blue" --->> Output: "blue is sky the"
//Input: " hello world " --->> Output: "world hello"
// Input: "a good example --->> Output: "example good a"

const removeTheOrder = s => {
  let splitS = s.split(" ");
  const stack = [];

  for (let i of splitS) {
    stack.push(i);
  }
//   console.log(stack)
  let final = "";
  while (stack.length) {
    const current = stack.pop();
    if (current) {
      final += " " + current;
    }
  }
  return final.trim();
};

const input = "the sky is blue";
console.log(removeTheOrder(input));
