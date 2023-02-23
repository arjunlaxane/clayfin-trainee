function myfunction(a){
    return function(x){
        return a+x;
    }

}

// var fn=myfunction(10);
// //
// console.log(fn(5))

// console.log(myfunction(10)(5))
// function sum1(x) {
//     return (y,z) => {
//         return sum2(x,y,z)
//     }
// }
// console.log(sum1(2)(3,4))

// function volume(l,b,h){
//     return l*b*h;
// }

// function curry(fn){
//     console.log(fn.length, arguments)

// }

// curry(volume)

function filterFunction(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) 
    {
      callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr;
  }

  function isOdd(x) {
    return x % 2 != 0;
  }
  
  // Function containing logic for filtering out even numbers
  
  function isEven(x) {
    return x % 2 === 0;
  }
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  
   console.log(filterFunction(arr, isOdd))
 // console.log(filterFunction(arr, isEven))