// case1
// function outer(){
//     console.log('i am executing...parent/outer')
//     function inner(){
//         console.log('i am executing...child/inner')
//     }
//     console.log(inner)
//     return inner;
// }
// console.log('hi');
// var globalref_toInner=outer();//callee
// console.log(globalref_toInner)
// globalref_toInner()

// case2 - problem statement
function outer(){
    console.log('i am executing...parent/outer')
    var outer=90;
    function inner(){
        outer=678;
        console.log('i am executing...child/inner ',outer)
    }
    console.log('value of outer variable now is :: ',outer)
    // console.log(inner)
    return inner;
}
// console.log('hi');
// var globalref_toInner=outer();//callee
// console.log(globalref_toInner)
// globalref_toInner()

// var t=7
// function f(){
//     t=90;
//     console.log(t)
// }
// console.log(t)
// f()
// console.log(t)

// case3
// function outer(){
//     console.log('i am executing...parent/outer')
//     var outer=90;
//     function inner(){
//         outer=678;
//         console.log('i am executing...child/inner ',outer)
//     }
//   //  inner()
//    // console.log('value of outer variable now is :: ',outer)
//     // console.log(inner)
//     return inner;
// }
// console.log(outer());//callee

// case 4
function outer(t){
    console.log('i am executing...parent/outer')  
    function inner(){        
        console.log('i am executing...child/inner ',t)
    }
    return inner;
 }
var ret=outer(10);//function inner(){console.log('i am executing...child/inner ',t)}
console.log(ret)
ret()
// console.log(check());//callee
// var num=7;
// function myfunction(){
//     var num=90;
//     var res=num%2==0?'even':'odd'
//     console.log('i completed execution & numb is :: ',res);
// }
// myfunction()
// console.log(num)