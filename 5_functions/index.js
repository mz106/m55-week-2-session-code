// const truthValue = "hello";

// if (truthValue) {
//   console.log("thing is true");
// } else {
//   console.log(`And I quote "thing is not true"`);
// }

// let balance = 1000000000000000000;
// // let balance2 = 76;
// // let balance3 = 590;

// const accnum1 = 123;
// const accnum2 = 456;
// const accnum3 = 789;

// const cashWithdrawl = (amount, accNum) => {
//   console.log(balance);
//   balance = balance - amount;
//   console.log(balance);
//   console.log(
//     `You withdrew ${amount} from account no. ${accNum}; your balance is now ${balance}`
//   );
// };

// cashWithdrawl(500, accnum1);
// cashWithdrawl(14, accnum2);
// cashWithdrawl(75, accnum3);

// const printWord = (word) => {
//   console.log(word);
// };

// printWord("hello");
// printWord("dave has blue jeans");

// const funcOfPower = (par1 = 100) => {
//   console.log(par1);
// };

// funcOfPower(50);
// funcOfPower();

// const addUp = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addUp(5, 10));

// const num1 = 5;
// const num2 = 10;

// const lysandrasCoolMultiplication = (num1, num2) => {
//   return num1 * num2;
// };

// console.log(lysandrasCoolMultiplication(10, 5));

// const ryansSinisterSubtraction = (num1, num2) => {
//   const sum = num1 - num2;
//   return sum;
// };

// console.log(ryansSinisterSubtraction(2, 6));

// const getFarV1 = (cel) => {
//   return cel * (9 / 5) + 32;
// };

const getFar = (cel) => {
  return multipyeByNineFifths(cel) + 32;
};

const multipyeByNineFifths = (cel) => {
  return cel * (9 / 5);
};

console.log(getFar(40));

function funcDecExample(par) {
  return par;
}

funcDecExample(par);
