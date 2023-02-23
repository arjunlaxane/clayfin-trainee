"use strict";
//arrow functions
//short hand version of normal functions
//in es6
console.log('script is loading...');
let f1=function(){
    console.log('hi-anonymous');
}

function f2(){
    console.log('hi-normal');
}
f1()
f2()

let f3=()=>{
    console.log('hi-arrow');
}


//f3();

(function(){
    console.log('hi-self call-loading done...');    
})()
let f4=(x=0,y=0)=>x+y;//no retun keyword
//console.log(f4(2))

// function f5(x=0,y=0){
// 	x=x*2;
// 	y=y-6;
// 	var z=x+y;
// 	return z;
// }
// f5(46,24);

let f6=(x=0,y=0)=>{
	x=x*2;
	y=y-6;
	var z=x+y;
	return z;
}
//console.log(f6(34,23))


// diff b/w arrow and normal function
// usage of this
function f8(){
    console.log(this);
}
f8();
let f9=()=> console.log(this);
f9();
 
 console.log(a); 
 var a;










