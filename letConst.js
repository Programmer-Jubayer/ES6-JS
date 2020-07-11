const name = "Jonson Niki";
// name = "Baris kimla";

//console.log(name); //Error = Assignment to constant variable. (You cannot assign variable in const )

const number = [23, 42, 53];
number[1] = 121;
number.push(345); //You can push, pop, or change the element value but you can't change the whole array

// number = [2432, 3254, 643, 5423]; //Error = Assignment to constant variable. (You cannot assign variable in const )

console.log(number);

//If you want to change the variable name then you have to declare let variable

let name2 = "Jonas";
name2 = "Piklu";
// console.log(name2); output= piklu

/** 
var sum = 0;
for (var i = 0; i < 11; i++) {
  sum = sum + i;
}
console.log(i);
*/

/** 
let sum = 0;
for (let i = 0; i < 12; i++) {
  sum = sum + i;
  console.log(i); //You can wright this 
}
console.log(i); //But you cannot wright this
*/
