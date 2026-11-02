// const fact = (n) => {
//   if (n===0 || n===1){
//     return 1
//   }
//   return n*fact(n-1);
// }
// console.log(fact(5))

// const fib = (n) => {
//   if (n<=1){
//     return n
//   }
//   return fib(n-1)+fib(n-2)
// }
// for (let i=0;i<=10;i++)
// console.log(fib(i))

function rev_string (name) {
    let stored= ""
    for (let i=name.length-1;i>=0;i--){
        stored+=name[i]       
    }
    return stored

}
console.log(rev_string(name="string"))
