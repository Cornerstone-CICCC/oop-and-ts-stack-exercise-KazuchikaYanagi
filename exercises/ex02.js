// Create a function called lowercaseStrings that converts all strings in the stack to lowercase
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require("../lib/Stack");

function lowercaseStrings(stack) {
  // your code here
  const tempStack = new Stack();

  while (!stack.isEmpty()) {
    for (let i = 0; i <= stack.size(); i++) {
      let tempWord = stack.pop();
      tempStack.push(tempWord.toLowerCase());
    }
  }

  return (stack.items = tempStack.items.reverse());
}

// Create stack
const stack = new Stack();
stack.push("Hello");
stack.push("woRLd");
stack.push("good");
stack.push("MORNING");

lowercaseStrings(stack);
console.log(stack.printStack()); // ["hello", "world", "good", "morning"]
