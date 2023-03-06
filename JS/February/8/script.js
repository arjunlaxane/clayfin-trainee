// 			|**caller**|

// 	res=areaOFSomething(10)-areaOfCircle(10)-areaOfSome(10,3);
// 	console.log(res);//this is expected one

// 	function areaOFSomething(r){
// 		var r1=pi*r*r*r;
// 		//console.log(pi*r*r*r);//not rgt place and this is not expected o/p
// 		//instead return it back to caller
// 		return  r1;

// 	}

// 	function areaOfCircle(r){
// 		return pi*r*r;
// 		}

// 	areaOfSome(r,h){
// 		return pi*r*r*h;
// 	}

// task 1 : make only one function and do the above operation

function calc(r, l, b) {
  let ans = Math.PI * Math.pow(r, 2) + l * b;
  return ans;
}

let res = calc(5, 2, 3);
console.log(res);

///task2:
function myConcat(separator) {
  let result = ''; //
  console.log(arguments);
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
let ans = myConcat(1, 2, 3);
console.log(ans); //34
