//rest operator

function deleted(a, ...b) {
  console.log(a, b);
  // console.log(a, b[0]);
}

let arr = [1, 2, 3, 4, 5, 6];

// deleted('Hello world', arr);

// deleted(1, 2, 3, 4, 5, 6, 7, 8);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

[a, b, ...c] = arr1; //rest
console.log(a, b, c); //->1 2 [3, 4, 5, 6,7, 8, 9]

//----
function check(a, b, ...c) {
  console.log(a, b, c);
}

check(1); //1 undefined []

//===============================================================================

//spread operator:

function func(m, a, b, ...p) {
  //rest
  console.log(m, a, b, p);
}

let num = [1, 2, 3, 4, 5, 6];
let m = 4;
func(m, ...num); //spread

// func(1, 2, 3, 4, 5, 6);

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3, 4];
console.log(sum(...numbers));

function add(...num) {
  const res = num.map(r => console.log('map', r));
  const ans = num.reduce((x, y) => x + y, 0);
  return ans;
}
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(add(...n)); //45

const arr3 = [1, 2, 3, 4, 5, 6];
const [z, ...restVal] = arr3;
console.log(z, restVal); //-> 1 [ 2, 3, 4, 5, 6 ]

//spread syntax using Objects:

const arr4 = [1, 2, 3, 4, 5];
const obj4 = { ...arr4 };
console.log(obj4); //->{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// let obj1 = { a: 1, b: 2 };
// let ans1 = [...obj1];
// console.log(ans1);

function myFunction(v, w, x, y, z) {
  console.log(v, w, x, y, z); //-1 0 1 2 3
  //->1 2 3 4 5
}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
myFunction(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
console.log(d); //->1969-12-31T18:30:00.000Z

const d1 = new Date(1966, 0, 28);
console.log(d1); //->1966-01-27T18:30:00.000Z

const obj5 = { name: 'Arjun', surName: 'Laxane' };
const obj6 = { city: 'Nagpur', state: 'Maharashtra' };

console.log({ ...obj5 }); //->{ name: 'Arjun', surName: 'Laxane' }

const obj7 = { ...obj5, ...obj6 };

console.log(obj7);

/*
{
  name: 'Arjun',
  surName: 'Laxane',
  city: 'Nagpur',
  state: 'Maharashtra'
}
*/

//object merging

const merge = (...objects) => ({ ...objects });
const mergedObj5Obj6 = merge(obj5, obj6);
console.log(mergedObj5Obj6);

/*
{
  '0': { name: 'Arjun', surName: 'Laxane' },
  '1': { city: 'Nagpur', state: 'Maharashtra' }
}
*/

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', x: 13 };
const merging = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj1 = merging(obj1, obj2);
console.log(mergedObj1); //->{ foo: 'baz', x: 13 }
