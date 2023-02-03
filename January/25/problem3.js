//Q find sum

//using for loop:

let num = 23;
let sum = 0;
let check = num.toString().split('');

for (let index = 0; index < check.length; index++) {
  sum += +check[index];
}

console.log(sum);

//------------------------------------2nd way--------------------------------

//using reduce function:

let val = 256;

let temp = val.toString().split('');

const initialValue = 0;
const sumWithInitial = temp.reduce(
  (accumulator, currentValue) => accumulator + +currentValue,
  initialValue
);

console.log(sumWithInitial);

//----------------------------------3rd way----------------------------------

//using reduce function and function expression:

function add(n) {
  let temp = n.toString().split('');

  const initialValue = 0;
  const sumWithInitial = temp.reduce(
    (accumulator, currentValue) => accumulator + +currentValue,
    initialValue
  );

  console.log(sumWithInitial);
}
add(54689);

//----------------------------4th way--------------------------------------

//using while loop:
function addAll(num1) {
  let add = 0;
  while (num1 != 0) {
    add = add + (num1 % 10);
    num1 = parseInt(num1 / 10);
  }
  return add;
}

let ans = addAll(4561);
console.log(ans);
