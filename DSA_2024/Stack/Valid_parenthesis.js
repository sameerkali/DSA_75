// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Input: "()"       ----->>>>> Output: true
// Input: "()[]{}"   ----->>>>> Output: true
// Input: "(]"       ----->>>>> Output: false


const isValid = (s) => {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Test cases
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("{[]}"));    // true
console.log(isValid("([)]"));    // false