//TASK: inherittence using prototype and __proto__

//PROTO:

//Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.

//ChildObject.__proto__ = ParentObject

//Example In the given example, there are two objects ‘person’ and ‘GFGuser’. The object ‘GFGuser’ inherits the methods and properties of the object ‘person’ and further uses them.

let person = {
  talk: true,
  Canfly() {
    return "Sorry, Can't fly";
  },
};

let GFGuser = {
  CanCode: true,
  CanCook() {
    return "Can't say";
  },

  //  Inheriting the properties and methods of person
  __proto__: person,
};

// Printing on console
// Property of person
console.log('Can a GFG User talk: ' + GFGuser.talk);

// Method of person
console.log('Can a GFG User fly: ' + GFGuser.Canfly());

// Property of GFGuser
console.log('Can a GFG User code: ' + GFGuser.CanCode);

// Method of GFGuser
console.log('Can a GFG User cook: ' + GFGuser.CanCook());

/*
->
Can a GFG User talk: true
Can a GFG User fly: Sorry, Can't fly
Can a GFG User code: true
Can a GFG User cook: Can't say 
*/

//-------------------------Prototype---------------------------------------

//All JavaScript objects inherit properties and methods from a prototype.

// function Person(first, last, age, eyecolor) {
// this.firstName = first;
// this.lastName = last;
// this.age = age;
// this.eyeColor = eyecolor;
// }

// const myFather = new Person('John', 'Doe', 50, 'blue');
// const myMother = new Person('Sally', 'Rally', 48, 'green');

// We can not add a new property to an existing object constructor:

// Person.nationality = 'English';

// To add a new property to a constructor, you must add it to the constructor function:

// function Person(first, last, age, eyecolor) {
// this.firstName = first;
// this.lastName = last;
// this.age = age;
// this.eyeColor = eyecolor;
// this.nationality = 'English';
// }

// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

// Adding Properties and Methods to Objects :

//The JavaScript prototype property allows you to add new properties to object constructors:

// function Person(first, last, age, eyecolor) {
// this.firstName = first;
// this.lastName = last;
// this.age = age;
//// this.eyeColor = eyecolor;
// }

// Person.prototype.nationality = 'English';

//The JavaScript prototype property also allows you to add new methods to objects constructors:

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

const myFather = new Person('John', 'Doe', 22, 'black');

console.log(myFather);
console.log(myFather.fullName());
