/*************************** var, let, const *******************************/


/*
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


var sum = 0;
for (var i = 0; i < 11; i++) {
  sum = sum + i;
}
console.log(i);



let sum = 0;
for (let i = 0; i < 12; i++) {
  sum = sum + i;
  console.log(i); //You can wright this 
}
console.log(i); //But you cannot wright this
*/


/*************************** Javascript Default Value *******************************/
/*
function add( num1 , num2 ) {
    return num1 + num2;
}

const sum = add(12); output= NaN; 
*/
/**
function add(num1, num2 = 10 (it is default value of num2) ) {
  return num1 + num2;
}
const sum = add(12); Output = 22 
console.log(sum);
 */


/*************************** Template In Javascript *******************************/

/*
const firstName = "Jonson";
const lastName = "TimberLake";

//before es6
const fullName = firstName + " " + lastName; //Output = Jonson TimberLake
//after es6
const fullName2 = `${firstName} ${lastName} is a good person `; //Jonson TimberLake is a good person
console.log(fullName2);

//Multiline sentence
//before es6
const work = "I eat rice \n" + "I watch movie \n" + "I walk beside the river.";
//after es6
const work2 = `I eat rice 
I watch movie 
I walk beside the river`;
console.log(work);

//es6 make out coding life more easier!!!
*/





/************************* Arrow Function In Javascript **************************/

/*
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
*/


/*************************** Three Dots In Javascript *******************************/
/*
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
*/


/*************************** Class In Javascript *******************************/

/*
class Student {
    constructor(sName, sId) {
      this.name = sName;
      this.id = sId;
      this.school = "Noyagang high school";
    }
  }
  
  const suudent1 = new Student("Nahid", 235);
  const suudent2 = new Student("Eramoni", 534);
  suudent1["name"] = "Nadia"; //You can set Property and you can change them same as object...
  suudent2.id = 2222222;
  console.log(suudent1);
  console.log(suudent2);
*/


/*************************** Inheritance In Javascript *******************************/

/*
class Parent {
    constructor() {
      this.fatherName = "Schwerznegger";
    }
  }
  
  class Child extends Parent {
    constructor(name) {
      super();
      this.name = name;
    }
    getFullName() {
      return this.name + " " + this.fatherName;
    }
  }
  
  const son1 = new Child("Arnold");
  const son2 = new Child("Tom");
  
  console.log(son1);
  console.log(son2.getFullName());
  */