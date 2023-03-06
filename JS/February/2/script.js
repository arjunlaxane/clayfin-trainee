//Number.MAX_VALUE:

//The Number.MAX_VALUE static data property represents the maximum numeric value representable in JavaScript.

// Values larger than MAX_VALUE are represented as Infinity and will lose their actual value.

console.log(Number.MAX_VALUE); //1.7976931348623157e+308

let a = Number.MAX_VALUE * 2;
console.log(a); //Infinity

//on every addition it will display same number

let b = Number.MAX_VALUE + 1;
console.log(b); //1.7976931348623157e+308

//------------------------------------------------------

//Number.MAX_SAFE_INTEGER:

//The Number.MAX_SAFE_INTEGER static data property represents the maximum safe integer in JavaScript  (253 – 1).

//For larger integers, consider using BigInt.

//Safe" in this context refers to the ability to represent integers exactly and to compare them correctly. For example, Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 will evaluate to true, which is mathematically incorrect. See Number.isSafeInteger() for more information

// console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(x);
// Expected output: 9007199254740992

console.log(x === y);
// Expected output: true

//---------------------------------------------------------

//Number.MIN_SAFE_INTEGER

//The Number.MIN_SAFE_INTEGER static data property represents the minimum safe integer in JavaScript, or -(253 - 1).

//To represent integers smaller than this, consider using BigInt.

const d = Number.MIN_SAFE_INTEGER - 1;
const e = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER);
// Expected output: -9007199254740991

console.log(d);
// Expected output: -9007199254740992

console.log(d === e);
// Expected output: true
//-----------------------------------------------------------

//Number.MIN_VALUE:

//The Number.MIN_VALUE static data property represents the smallest positive numeric value representable in JavaScript.

// console.log(Number.MIN_VALUE); //5e-324

//1 > Number.MIN_VALUE

let v = Number.MIN_VALUE - 1;
console.log(v);
//---------------------------------------------------------

///BigInt:

//BigInt values represent numeric values which are too large to be represented by the number primitive.

//It appends n to the end of an integer literal,
let q = BigInt(1);
console.log(q); //1n

console.log(typeof BigInt(21)); //bigint
