/******************** IIFE & Block *******************/

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



/******************** Strings in ES6 *******************/


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




/******************** Arrow Function in JS *******************/

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


/////////////////////////// Advance Uses of Arrow Function /////////////////////////

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



/******************** Destructuring *******************/


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


/******************** Array *******************/


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



/******************** Spread Operator *******************/


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


/******************** Rest Parameters *******************/

//ES5

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



/******************** Default Parameters *******************/

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



/********************************** Maps ******************************/

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



/******************************* Class ******************************/

//ES5

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth =  yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

const john = new Person5("John", 2000, "Teacher");
console.log(john);
console.log(john.calculateAge());


//ES6
class Person6 {
    constructor (name, yearOfBirth, job){
        this.name =  name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

const john2 = new Person6("John", 2000, "Teacher");
console.log(john2);
john2.calculateAge()


/******************************* Sub classes ******************************/


var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth =  yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athletes5 = function(name, yearOfBirth, job, olympicGame, medal) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGame = olympicGame;
    this.medal = medal
}

Athletes5.prototype = Object.create(Person5.prototype);
Athletes5.prototype.wonMedals = function(medal) {
    this.medal++;
    console.log(this.medal)
}


var john =new Athletes5('John', 1990, 'swimmer', 3, 10);
john.calculateAge();
john.wonMedals();
console.log(john);


//ES6
class Person6 {
    constructor (name, yearOfBirth, job){
        this.name =  name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athletes6 extends Person5 {
    constructor (name, yearOfBirth, job, olympicGame, medal) {
        super(name, yearOfBirth, job)
        this.olympicGame = olympicGame;
        this.medal = medal;
    }

    wonMedals () {
        this.medal++;
        console.log(this.medal)
    }
}

const mark = new Athletes6('Mark', 2000, 'sprinter', 5, 8);
mark.wonMedals();
mark.calculateAge();
console.log(mark);




/******************************* CODING CHALLENGE ******************************/

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/


class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, numberOfTree, parkArea) {
        super(name, buildYear);
        this.numberOfTree = numberOfTree;
        this.parkArea = parkArea;
    }

    densityTree() {
        const density = Math.round(this.numberOfTree / this.parkArea);
        const ages = new Date().getFullYear() - this.buildYear;
        console.log(`${this.name} has a density of ${density} tree per km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`)
    }
}


const allPark = [new Park('Green Park', 1880, 500, .8),
             new Park('National Park', 1900, 1800, 2.5),
             new Park('Oak Park', 1950, 900, 0.7)];

const allStreets = [new Street("Sonar Bangla", 1958, 1.5, 2 ), 
                    new Street("Ever Green",1876, 2.5, 3),
                    new Street('GreenLine', 2002, 3 ),
                    new Street('Sunset Street', 2012, 1.8, 5)];

  function calc(p) {
      const sum = p.reduce((prev, cur, index) => prev + cur, 0);
      return [sum , sum / p.length]
  }

  function reportParks(p) {
        console.log('--------------Parks---------------')

        p.forEach(el => {
            //Density
            el.densityTree();
        });

        // Average Age
        const ages = p.map(el => new Date().getFullYear() - el.buildYear);
        const [totalAge, avgAge] = calc(ages);
        console.log(`Our ${p.length} parks has an average of ${avgAge} years`);

        //Which park has more than 1000 trees
        const i = p.map(el => el.numberOfTree).findIndex(el => el >=1000);
        console.log(`${p[i].name} has more than 1000 trees.`)
   }

  function reportStreets(s) {
        console.log('--------------Streets-------------')

        // Total and average length of the town's streets
        const [totalLength, avgLength] = calc(s.map(el => el.length));
        console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

        //Classify Sizes
        s.forEach(el => el.classifyStreet());
  }


  reportParks(allPark);
  reportStreets(allStreets);



