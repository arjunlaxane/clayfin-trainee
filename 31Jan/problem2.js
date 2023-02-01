// print only if the keys of the above array objects are having values
// skip objects with key holding -undefined

let emp = [
  { name: 'aa', age: 23, city: 'Mumbai' },
  { name: 'bb', age: 23, city: undefined },
  { name: 'cc', age: 23, city: 'Hyderabad' },
  { name: 'dd', age: 23, city: undefined },
  { name: 'dd', age: 23, city: undefined },
];

var employee = emp.filter(el => {
  return el.name !== undefined && el.age !== undefined && el.city !== undefined;
});

for (let i in employee) {
  console.log(employee[i]);
}

//-----------------------------For only undefined values-----------------

// for (let i in emp) {
// for (let j in emp[i]) {
// if (typeof emp[i][j] === 'undefined') {
// console.log(emp[i]);
// break;
// }
// }
// }
