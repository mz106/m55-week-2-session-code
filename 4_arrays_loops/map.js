const arr = ["cheese", "beans", "toast"];

//

const mappedArr = arr.map((str, index) => {
  return str.toUpperCase();
});

console.log(mappedArr);
console.log(arr);
