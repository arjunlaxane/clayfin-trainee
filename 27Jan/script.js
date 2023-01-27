// for in

const ob = { a: 1, b: 2, c: 3 };

for (const property in ob) {
  console.log(`${property}: ${ob[property]}`);
}

//  output:
// "a: 1"
// "b: 2"
// "c: 3"

const array = ['a', 'b', 'c'];

for (const element in array) {
  console.log(element, array[element]);
}

//output: 0 a
//output: 1 b
//output: 2 c

//--------------------------------------------------------------------
//for of:

for (const [k, v] of Object.entries(ob)) {
  console.log(k, v);
}
//->
//a 1
// b 2
// c 3

for (const k of Object.entries(ob)) {
  console.log(k);
}

//->
// ['a', 1]
// ['b', 2]

// ['c', 3]

// let obj = { a: 1, b: 2, c: 3, d: 4 };

// for (const k of ob) {
// console.log(k);//Typeerror
// }

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

//output: "a"
//output: "b"
//output: "c"

let ob1 = { a: 1, b: 2, c: 3, d: 4 };
for (const k in ob1) {
  console.log(k, ob1[k]);
  // console.log(k, ob1.k); //not work
}

let ob2 = { a: 1, b: 2, c: 3, d: 4 };
console.log(Object.entries(ob2));

//=============================================

let user = {
  name: 'aaa',
  city: 'Banglore',
  courses: ['c', 'java'],
  address: {
    state: 'karnataka',
    pin: 50004,
  },
};

let {
  name,
  city,
  address: { state, pin },
} = user;

console.log(name, city, state, pin);
