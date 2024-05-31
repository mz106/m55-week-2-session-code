// declare global variable
const globalVar = 1;

// declare local variable - what MUST come first?

const myFunc = () => {
  const localVar = "hello";
  const anotherLocalVar = "hi, I'm local";

  return localVar;
};

// this will work as myFunc returns localVar, pushing it into the global scope
console.log(globalVar, myFunc());
// this will throw an error and localVar is inaccesible in the global scope
console.log(globalVar, localVar);
