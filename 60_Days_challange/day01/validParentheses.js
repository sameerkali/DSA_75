const isValid = function (s) {
  let ans = s.split("");
  if (ans.length % 2 != 0) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (ans[i] === "(" || ans[i] === "{" || ans[i] === "[") {
      stack.push(ans[i]);
    } 
    else if (ans[i] === ")") {
      if (stack.pop() !== "(") return false;
    } 
    else if (ans[i] === "}") {
      if (stack.pop() !== "{") return false;
    } 
    else if (ans[i] === "]") {
      if (stack.pop() !== "[") return false;
    }
  }
  return stack.length === 0;
};

let string = "{[()]}";
console.log(isValid(string));
