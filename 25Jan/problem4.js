//Q.find sum. Convert number into single digit by adding

let num = 5145166655;
let sum = 0;
let val = 0;
let check = num.toString().split('');

for (let index = 0; index < check.length; index++) {
  sum += +check[index];
}

let ans = sum.toString().split('');

for (let index = 0; index < ans.length; index++) {
  val += +ans[index];
}

console.log(val);
