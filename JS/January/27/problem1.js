//reversing the number without converting it to string?

function reverseNum(num) {
  let reverse = 0;

  while (num != 0) {
    reverse = reverse * 10 + (num % 10);
    num = parseInt(num / 10);
  }

  return reverse;
}

let numCheck = reverseNum(123456);
console.log(numCheck);

