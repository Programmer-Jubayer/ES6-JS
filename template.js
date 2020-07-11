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
