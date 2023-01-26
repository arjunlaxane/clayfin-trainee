//Q find sum

let num = 23;
let sum = 0;
let check = num.toString().split('');

for (let index = 0; index < check.length; index++) {
  sum += +check[index];
}

console.log(sum);
