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
