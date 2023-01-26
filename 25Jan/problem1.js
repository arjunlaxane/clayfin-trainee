//25-01-2023

//Q. convert number to simple worlds. 123 -> one two three

let num = 12345;
let reverse = 0;
let res = '';
while (num != 0) {
  reverse = reverse * 10 + (num % 10);
  num = parseInt(num / 10);
}
while (reverse != 0) {
  switch (reverse % 10) {
    case 0:
      res += 'zero ';
      console.log('0');
      break;
    case 1:
      res += 'one ';
      break;
    case 2:
      res += 'two ';
      break;
    case 3:
      res += 'three ';
      break;
    case 4:
      res += 'four ';
      break;
    case 5:
      res += 'five ';
      break;
    case 6:
      res += 'six ';
      break;
    case 7:
      res += 'seven ';
      break;
    case 8:
      res += 'eight ';
      break;
    case 9:
      res += 'nine ';
      break;
  }

  reverse = parseInt(reverse / 10);
}
console.log(res.trim());
