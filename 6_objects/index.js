// and object is made up of key/value pairs

// const person = {
//   myName: "michael",
//   isAwesome: true,
//   eyeColour: "blue",
// };

// // console.log(person);
// // console.log(person.eyeColour);
// // console.log(person.myName);
// // console.log(person.isAwesome);

// // console.log(person.salary);

// console.log(person["myName"]);

// let day = "sat";
// let alarm =

// const myAlarm = {};

// const person = {
//   myName: "michael",
//   isAwesome: true,
//   eyeColour: "blue",
// };

// console.log("Person object before I add a new key: ", person);

// // object.newKey = newValue

// person.hairColour = "blonde";

// person.car = "merc";

// console.log("Person object after I add a new key: ", person);

// console.log(1, { hello: "world" }, ["1", "2"], "hi there");

const isAwesome = false;

const person = {
  myName: [1, 5, 3],
  isAwesome: true,
  eyeColour: "blue",
  takeApple(apples) {
    console.log(`Thanks for the ${apples} apples`);
  },
  markWork(work) {
    if (work) {
      console.log("Great job!");
    } else {
      console.log("try harder!");
    }
  },
  checkIsAwesome() {
    if (this.isAwesome) {
      return "Yes, is Awesome";
    } else {
      return "No!!!!!!";
    }
  },
  changeEyeColour(colour) {
    this.eyeColour = colour;
  },
  returnPersonName() {
    return this.myName;
  },
};

// person.takeApple(4);
// console.log(person.checkIsAwesome());

// console.log(person.isAwesome);
// console.log(isAwesome);

console.log(person.eyeColour);
person.changeEyeColour("green");
console.log(person.eyeColour);
