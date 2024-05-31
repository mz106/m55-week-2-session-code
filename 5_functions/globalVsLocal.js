// declare global variable
const globalVar = 1;

// declare local variable - what MUST come first?

const myFunc = () => {
  const localVar = "hello";
  const anotherLocalVar = "hi, I'm local";

  return localVar;
};

console.log(globalVar, myFunc());
console.log(globalVar, localVar);
