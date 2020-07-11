const num = [12, 14, 36, 45, 25];
const num2 = [100, 200, 300];
const num3 = [400, 500, 600, 700];
//Before es6
const allNum = num.concat(num2).concat(5000).concat(num3);
console.log(allNum);
//After es6
const allNum2 = [...num, ...num2, 5000, ...num3];
console.log(allNum2);

//Find maximum number of an array
const newArray = [
  23234,
  2434,
  32421,
  234,
  2344,
  123,
  14324,
  5,
  4325,
  2,
  3,
  4,
  1312,
  2354,
  5234,
];
const maximum = Math.max(...newArray);

console.log(maximum);
