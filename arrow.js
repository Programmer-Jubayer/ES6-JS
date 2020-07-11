//function expression 1

// function doubleIt(num) {
//   return num * 2;
// }

//function expression 2
// const doubleIt = function (num) {
//   return num * 2;
// };

//function expression 3 & ES6 version
const doubleIt = (num) => num * 2;
const add = (num1, num2) => num1 + num2;

// multiline function in es6
const addNum = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};

console.log(addNum(10, 5));
console.log(add(554, 664));
console.log(doubleIt(35));
