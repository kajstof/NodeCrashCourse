class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

// module.exports = Person;
// const Person = require('./person');
// import Person from './person';

const person1 = new Person("Holly", 33);
person1.greeting();