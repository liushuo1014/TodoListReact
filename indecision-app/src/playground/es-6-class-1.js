class Person {
  constructor(name = "Anonymous", Age = 0) {
    this.name = name;
    this.Age = Age;
  }
  getGreetings() {
    //return "Hi!" + this.name;
    return `Hi!, ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.Age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
}

class Traveler extends Person {
  constructor(homeLcoation) {
    super(name, age);
    this.homeLcoation = homeLcoation;
  }
    hasHomeLocaiton() { 
        return !!this.homeLcoation;
    }
}
const me = new Student("shuo", 20, "Computer Science");
console.log(me.hasMajor());

const other = new Student();
console.log(other.hasMajor());
