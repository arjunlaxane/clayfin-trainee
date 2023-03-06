//task: defineProperties, Object.entries(),Object.freeze()

//The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

//The Object.defineProperties() static method defines new or modifies existing properties directly on an object, returning the object.

//In short, it defines new properties of an object OR modifies existing properties of an object

// 'use strict';

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1); //{}

console.log(object1.property1);
// Expected output: 42

object1.property1 = 'Arjun';
// Throws an error in strict mode

console.log(object1.property1); //Arjun

//-------------------------------Object.entries()................................

// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

const object2 = {
  a: 'somestring',
  b: 42,
  c: 45,
};
let ans = Object.entries(object2);
console.log(ans);

for (const [key, value] of Object.entries(object2)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// a: "somestring"
//  b: 42
// c:45

//-----------------------------Object.freeze()................................

//The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

//Freezing an object is the highest integrity level that JavaScript provides.

const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj); //{ prop: 42 }
console.log(obj.prop);
// Expected output: 42


