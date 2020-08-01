/******************** IIFE & Block *******************/

/*
//ES6
{
    const a = 25;
    let b = 30;
    var c = 50;
}

console.log(a + b) //Output Error
console.log(c) //Output 50


//ES5
(function() {
    var c = 300;
})();
console.log(c) //Output Error

*/

/******************** Strings in ES6 *******************/

/*
let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;
function calcAge(year) {
    return 2020 - year;
}

//ES5
console.log("Hello, I am " + firstName + " " + lastName + ". I was born in " + yearOfBirth + " I am now " + calcAge(yearOfBirth));

//ES6
console.log(`Hello, I am  ${firstName} ${lastName}. I was born in   ${yearOfBirth} I am now  ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`
console.log(n.startsWith("J"));
console.log(n.endsWith("th"));
console.log(n.includes("th"));
console.log(`OH!${firstName} `.repeat(10));

*/


/******************** Arrow Function in JS *******************/
/*
const years = [1990,1995,2001,1987];

//ES5 
const ages5 = years.map(function(el) {
    return 2020 - el;
})

//ES6
let ages6 = years.map(el => 2020 - el);

ages6 = years.map((el, index) => `Number-${index + 1}: ${2020 - el}.`) //Single Line

//Multiline 
ages6 = years.map((el, i) =>{
    const now = new Date().getFullYear();
    const age = now - el;

    return `Age-${i + 1}: ${age}.`;
})

console.log(ages5)
console.log(ages6)
*/

/////////////////////////// Advance Uses of Arrow Function /////////////////////////
/*
//ES5
const box5 = {
    color: "green",
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector(".green").addEventListener("click", function() {
            var box5 = "This is the color of " + self.color + " & it's position no is " + self.position;
            alert(box5);
        })
    }
}
// box5.clickMe();


//ES6

const box6 = {
    color: "green",
    position: 1,
    clickMe: function() {
        document.querySelector(".green").addEventListener("click", () => 
         {
            var box5 = "This is the color of " + this.color + " & it's position no is " + this.position;
            alert(box5);
        })
    }
}
// box6.clickMe();



function Person(name) {
    this.name = name;
}

//ES5

Person.prototype.myFriends5 = function(friends) {

    var self = this;
    var arr = friends.map(function(el) {
        return self.name + " is a friend with " + el;
    })
    console.log(arr);
}

//ES6
var friends = ["Mark", "Jane", "Jonas"];

Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(el => {
        return `${this.name} is a friend with ${el}`;
    })

    console.log(arr);

}

new Person("John").myFriends5(friends);
*/


/******************** Destructuring *******************/

/*
//ES5
var john = ["John", 23];
// var name = john[0];
// var age = john[1];

// console.log(name);
// console.log(age);

//ES6
const [name, age] =  ["Jonson", 40];

console.log(name);
console.log(age);

const obj = {
    firstName: "John",
    lastName:  "Doe"
}

const { firstName, lastName } = obj;

const { firstName: a, lastName: b } = obj;

console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    var age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1980);

console.log(age);
console.log(retirement);
*/

/******************** Array *******************/

/*
const boxes = document.querySelectorAll(".box");

//ES5

const boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(current) {
    current.style.backgroundColor= "orangeRed";
});


//ES6
const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach( el => el.style.backgroundColor = "blue");

//ES5

for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === "box blue") {
        continue;
    } else {
        boxesArr5[i].textContent = "Hey I am changed to Orange";
    }
}

//ES6

for(const i of boxesArr6) {
    if (i.className.includes("blue")) {
        continue;
    }else {
        i.textContent = "Hey I am changed to Orange";
    }
}

var ages = [12,15,19,45,1,2,21,20];

//ES5
var full = ages.map(function(current) {
    return current >= 22;
});
console.log(full);
console.log(full.indexOf(true));

//ES6
console.log(ages.findIndex(el => el >= 21));
console.log(ages.find(el => el >= 21));
*/


/******************** Spread Operator *******************/

/*
var markFamily = ["John", "Mark", "Lily"];
var maryFamily = ["Mary", "Bob", "Jane"];

var bigFamily = [...markFamily, "Jonson", ...markFamily];
console.log(bigFamily)

const h = document.querySelector('h1');
const box = document.querySelectorAll(".box");
const all = [...box, h]

all.forEach(el => {
    el.style.color = "purple"
});
console.log(box2);
*/

/******************** Rest Parameters *******************/

//ES5
/*
function isFullAge() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2020-cur) >= 19)
    })
}

// isFullAge(2002,1985,2005,2000);

//ES6
function isFullAge6(...years) {
years.forEach(cur => console.log((2020 - cur) > 18))
}
isFullAge6(2002,1985,2005,2000);



function isFullAge(limit) {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    
    argsArr.forEach(function(cur) {
        console.log((2020-cur) >= limit)
    })
}

// isFullAge(16, 2002,1985,2005,2000);

//ES6
function isFullAge6(limit, ...years) {
years.forEach(cur => console.log((2020 - cur) > limit))
}
isFullAge6(19 ,2002,1985,2005,2000);
*/


/******************** Default Parameters *******************/
/*
////////////////////////// ES5 ///////////////////////
function SmithFamily(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = "Noyimpu" : lastName = lastName;
    nationality === undefined ? nationality = "Canadian" : nationality = nationality;
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

const john = new SmithFamily("John", 1990);
const emily = new SmithFamily("John", 1990, "Princeeeeeeeeee", "Spanish");
console.log(john);
console.log(emily);

///////////////////// ES6 ///////////////////
function SmithFamily(firstName, yearOfBirth, lastName = "Noyimpu", nationality= "Canadian") {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
const john = new SmithFamily("John", 1990);
const emily = new SmithFamily("John", 1990, "Princeeeeeeeeee", "Spanish");
console.log(john);
console.log(emily);
*/




/********************************** Maps ******************************/
/*
const question = new Map();
question.set('question', 'What is the best job in the world???');
question.set(1, 'Teacher');
question.set(2, 'Web Developer');
question.set(3, 'Doctor');
question.set(4, 'Engineer');
question.set('correct', 2);
question.set(true, 'Correct answer');
question.set(false, 'Please try again');

console.log(question.get("question"));
// console.log(question.get(2))
// console.log(question.size);

if(question.has(4)) {
    // question.delete(4)
    // console.log("Question 4 is here");
} else {
    // console.log("Question 4 is not there...!")
}

question.forEach((value,key) => {
    // console.log(`${key}: ${value}`)
})

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
    console.log(`${key}: ${value}`)
    }
}

const ans = parseInt(prompt("Choose the correct answer"));

console.log(question.get(ans === question.get('correct')));
*/


/********************************** Maps ******************************/
