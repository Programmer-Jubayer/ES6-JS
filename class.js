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
