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

//-----------------------------2nd way-------------------------

function singleDigitMaker(val) {
  let sum1 = 0;
  let arr1 = val.toString().split('');

  for (let index = 0; index < arr1.length; index++) {
    sum1 += +arr1[index];
  }
  return sum1;
}

let ans1 = singleDigitMaker(555);
console.log(ans1);
