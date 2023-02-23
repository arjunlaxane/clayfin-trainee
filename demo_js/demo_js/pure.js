// function Double(v){
//     v=ReadableStream("t.txt")
//     console.log(v)
// }
//  Double(5) 
// console.log( 10 );

let x = 0;
// function credit(amt){
//     if(amt===undefined)
//         this.x=0
//     this.x=amt;// getting from an api
// }
const add = (y) => {
   y =y+ (x?0:x);
  console.log(y)
};
//credit(100)
add(1000);