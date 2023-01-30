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
console.log(a, b, c);

//---------------------------------------------------------------------

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
