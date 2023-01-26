//24-01-2023

//In JavaScript, dir() and log() are the methods of console object. Console object provides access to the browser’s debugging console.

//console.dir()

//The method console.dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.

// In other words, console.dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.

//object : A JavaScript object whose properties should be output.

//console.dir shows all properties of a DOM element and can display only one object.

var a = 2;
console.log(a); //2
console.dir(a); //2

var b = { a: 1, b: 2 };

console.log(b);
console.dir(b);

/*
->
{a: 1, b: 2}
Object-> Object
          a:1
          b:2

*/

console.dir(673563);
console.dir('Welcome to Tutorialspoint');
console.dir(76325 * 476);

/*
673563
 Welcome to Tutorialspoint
 36330700
*/

const nama = function () {
  console.dir('Arjun');
};
nama(); //Arjun

var employee = {
  name: 'Arjun',
  role: 'trainee',
  salary: '3.5LPA',
};
var bio = {
  name: 'Arjun',
  lastName: 'Laxane',
};

console.dir(employee);
console.log('employee with console.log = ', employee);
console.dir('employee with console.dir = ', employee);
console.dir(bio, employee);
console.dir(employee, 'gg');

console.dir(`employee console dir, ${JSON.stringify(employee)}`);

//Just use JSON.stringify. What's happening is that when you use the string interpolation ${}, the toString method is called - on an object, the result of this is [object Object]:

//Also note that dir is used for showing the different properties of objects. It's better to just use console.log, which means you can avoid JSON.stringify altogether:

//Parameters: This method accepts single parameter which holds the object element.

//The main difference between these two methods is that the console.log() method displays the “toString” representation of any object passed to it.

var arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.dir(arr);

/*
(6) [1, 2, 3, 4, 5, 6]
VM579:3 Array(6)
*/

//While console.log() will work for objects, there is a method specifically meant for displaying objects to the console called console.dir().

//---------------------------------------------------------------------

//TYPECONVERSIONS:

var a1 = true;
console.log(typeof a1); //boolean
var b1 = String(a1);
console.log(typeof b1); //string
console.log(b1); //true

var b2 = Number(a1);
console.log(b2); //1
console.log(typeof b2); //number

var b3 = parseFloat(a1);
console.log(b3); //NaN
console.log(typeof b3); //number

var a2 = 'Arjun';
var b4 = parseFloat(a2);
console.log(b4); //Nan
console.log(typeof b4); //number

var b5 = Number(a2);

console.log(b5); //Nan
console.log(typeof b5); //number

//-------------------------------------------------------------------------

//TYPEOF

console.log(null); //null
console.log(typeof null); //object

var a = 1 - '1';

console.log(a);

var num = -1;
console.log(Boolean(num));

var str = 'qwjbdjhbd';
console.log(Number(str));

var nummm = 5;
console.log(typeof nummm.toString());

//----------------------------------

//undefined
//The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.

//undefined is a property of the global object. That is, it is a variable in global scope.

//A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.

// let x;
// console.log(typeof x);
// if (x === undefined) {
// console.log('Hi');
// } else {
// console.log('bye');
// }

let undefined = 22;
console.log(undefined);

// Note: While you can use undefined as an identifier (variable name) in any scope other than the global scope (because undefined is not a reserved word), doing so is a very bad idea that will make your code difficult to maintain and debug.

// DON'T DO THIS

(() => {
  const undefined = 'foo';
  console.log(undefined, typeof undefined); // foo string
})();

(undefined => {
  console.log(undefined, typeof undefined); // foo string
})('foo');

// Strict equality and undefined
// You can use undefined and the strict equality and inequality operators to determine whether a variable has a value. In the following code, the variable x is not initialized, and the if statement evaluates to true.

// let x;
// console.log(typeof x);
// if (x === undefined) {
// console.log('Hi');
// } else {
// console.log('bye');
// }
var xx = 8;
var aaa = [1, 2, 3, 4, 5, 6, 7, 8, 9];

if (xx in aaa) {
  console.log('hi');
} else {
  console.log('bye');
}

//-------------------------------------------------------------------------------

// it is important to note that JavaScript is an object-based language based on prototypes, rather than being class-based.

// Creating object with a constructor:

// One of the easiest way to instantiate an object in JavaScript. Constructor is nothing but a function and with help of new keyword, constructor function allows to create multiple objects of same flavor as shown below:

//simple function
function vehicle(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;
}
//new keyword to create an object
let car = new vehicle('GT', 'BMW', '1998cc');
//property accessors
// console.log('Object-->', car);

//Using object literals:
// Literals are smaller and simpler ways to define objects.We simple define the property and values inside curly braces as shown below:

//creating js objects with object literal
let carr = {
  name: 'GT',
  maker: 'BMW',
  engine: '1998cc',
};
// console.log(carr);

//Creating object with Object.create() method:

//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
  },
};

const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying = true;
me.printIntroduction();

// console.log('me object-->', me);

//Using es6 classes:

//object can be created out of a class in javascript as well

//using es6 classes
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}

let car1 = new Vehicle('GT', 'BMW', '1998cc');

console.log(car1);

console.log(typeof typeof null); //string

console.log('arjun' + 1); //arjun1---implicit conversion
console.log(typeof ('arjun' + 1)); //string
console.log('0 * 11' * 1); //NaN

console.log(Number('11')); //explicit conversion

//---------------------------------------------------------

console.log(aaaa);
aaaa = 5;
