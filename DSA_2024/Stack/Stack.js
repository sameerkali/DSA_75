class Stack {
  constructor() {
    this.stack = [];
  }

  //push
  push(element) {
    this.stack.push(element);
  }

  //pop
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // peek
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  //helper functions
  size() {
    return this.stack.length;
  }

  //print All Elements
  printAll() {
    for (let i = this.size() - 1; i >= 0; i--) {
      console.log("🤏", this.stack[i]);
    }
  }
}

const stack = new Stack();

stack.push(2);
stack.push(69);
stack.push(420);
stack.push(7);
console.log( stack.size())
// console.log(stack.peek());
// console.log(stack.pop());
stack.printAll();
// console.log(stack.isEmpty());
