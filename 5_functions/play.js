const globalVar = "hello";

const myFunc = () => {
  const isItGlobalVar = "am I even real?!?!?!?!";

  console.log(globalVar);
  myFuncTwo(isItGlobalVar);
};

const myFuncTwo = (par) => {
  console.log(par);
  console.log(globalVar);
};

// myFunc();
