// case 1:
//console.log(average()); 

// case 2:
function square(a){
    console.log(a*a);
}
console.log(square()); 
console.log(square(5)); 
//undefined with any arithmetic operator is NaN

//JavaScript interpreter hoists the entire function declaration 
//to the top of the current scope,
// case 3:
//function hoisting
console.log(cube(4)); 
function cube(a){
    console.log(a*a*a);
}

// case 4:
// console.log(delete1); // ReferenceError: Cannot access 'square' before initialization
//in f12 tool u get function not defined
// const delete1 = function (n) {
//   return n * n;
// };

function showName(){
    var name1="Nate";//local scope or function scope
    console.log(name1);
}
showName()
//console.log(name1);//will throw ReferenceError: name1 is not defined
showName()

// nested functions
// case 1
// function outer(){
//     console.log('started...')
//     function inner(){
//         console.log("i am inner function");
//     }//will not be executed until it is called
// }
// outer();
// case 2: call inner function

// function outer(){
//     console.log('started...')
//     function inner(){
//         console.log("i am inner function");
//     }//will not be executed until it is called
//   //  inner()
// }
//outer();

// case 3:
function outer(){
    console.log('started...')
    function inner(){
        console.log("i am inner function");
    }//will not be executed until it is called
  //  inner()
}
//outer.inner();//Error: outer.inner is not a function

// // case 4:
// function outer(){
//     var a=9878;
//     console.log('started...')
//     function inner(){
//         console.log("i am inner function");
//           console.log('a value is :: ',a)  
//     }//will not be executed until it is called
//     inner()
// }
// outer();

// case 5:
// function outer(){
//     var a=9878;
//     console.log('started...')
//     function inner(){
//         var innerVAr=18;
//         console.log("i am inner function");
//           console.log('a value is :: ',a)  
//     }//will not be executed until it is called
//     inner()
//     console.log(innerVAr)// ReferenceError: innerVAr is not defined at outer
    
// }
// outer();

//argument in a function
/**** difference between arg and rest ****/
// function display(a,b){
//     console.log(arguments) 
//     console.log(arguments[0],arguments[1],arguments[2])   
//     console.log('hi')
// }
// display(10,23,25)//callee

// function display(a,b,...r){
//     console.log(a,b)
//     console.log(r);
//     for(let i of r)
//         console.log(i)
// }
// display(10,23,25,89,78)

function display(a,b){
    console.log(a,b)
    console.log(arguments)
    // for(let i of arguments)
    // console.log(i) //solution 2 instead of rest optr is below
    for(let i in arguments)
       if(i>=2)
        console.log(arguments[i])
   
}
display(10,23,25,89,78)