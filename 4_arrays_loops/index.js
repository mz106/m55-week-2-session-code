// let coffeeOrder = [
//   "alex - cortardo",
//   "ben - cortado",
//   "charlie - whatevers new",
// ];

// // console.log(coffeeOrder[2]);

// coffeeOrder[1] = "ann - vanilla latte";

// // console.log(coffeeOrder.length);

// // const arr = [1, 2, 3, 4];

// // console.log(arr.length);
// console.log(coffeeOrder);
// coffeeOrder.push("michael - triple espresso");

// console.log(coffeeOrder);
// console.log(coffeeOrder.length);

// coffeeOrder.pop();
// console.log(coffeeOrder);

// coffeeOrder.pop();
// console.log(coffeeOrder);

// const favDrinks = ["sprite", "coke", "tea"];

// // console.log(favDrinks[0]);
// // console.log(favDrinks[1]);
// // console.log(favDrinks[2]);

// for (let i = 0; i < favDrinks.length; i++) {
//   console.log(favDrinks[i]);
// }

// const oddNums = [];

// for (let i = 0; i < 20; i++) {
//   if (i % 2 != 0) {
//     oddNums.push(i);
//   }
// }

// console.log(oddNums);

// let age = 15;

// while (age < 18) {
//   console.log("Youre a child!");
//   age++;
// }

// console.log("Youre an adult");

const ranNum = Math.random();

// console.log(`ranNum: ${ranNum}`);

const multipliedNum = ranNum * 4;

// console.log(`multipliedNum (ranNum * 10): ${multipliedNum}`);

const floorNum = Math.floor(multipliedNum);

// console.log(`floorNum (multipliedNum floored): ${floorNum}`);

// const myArr = ["hello", "world", "everyone"];

// const myElement = myArr[1];

const cards = ["diamond", "spade", "heart", "club"];
let currentCard = "diamond";

while (currentCard != "spade") {
  console.log(currentCard);
  // const randomNum = Math.random();
  // const multipliedNum = randomNum * 4;
  // const floorNum = Math.floor(multipliedNum);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log("after while loop: ", currentCard);

// console.log(Math.random());
