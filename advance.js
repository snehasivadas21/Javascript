// console.log("hello")

// var,let,const
// let age=25;
// age=26
// console.log(age)

// const place="palakkad";
// place="kozhikode";
// console.log(place)

// block scope
// if (true){
//     const number=7;
//     console.log(number)
// }
// console.log(number)

// template literals
// const name="sneha";
// const age=24;

// console.log(`my name is ${name} and im ${age} years old`)

// destructuring
// const user = {name:"sneha",age:24,role:"developer"}
// const {name,age,role} = user
// console.log(name)
// console.log(age)
// console.log(role)

// const numbers = [10,20,30]
// const [first,second,third] = numbers
// console.log(first)
// console.log(second)
// console.log(third)

// function with default parameter
// function greet(name="sneha"){
//     console.log(`Hello ${name}`)
// }
// greet("Mr")
// greet()

// arrow function
// const add = (a,b) => a+b
// console.log(add(4,5))

// const greet = name => { return `Hello ${name}`}
// console.log(greet("Sneha"))

// const getUser = () => ({name:"sneha",role:"dev"})
// console.log(getUser())

// const isEven = (number) => { return number%2===0}
// console.log(isEven(16))

const numbers = [10, 20, 30, 40, 50];
const double = numbers.map((num)=>{return num*2})
console.log(double)

// const getUser = () => ({name:"aaa",age:67})
// console.log(getUser())

// callback
// function greet(name, callback){
//     console.log("Hello "+ name)
//     callback();
// }
// function sayHello(){
//     console.log("Goodbye");
// }
// greet("sneha",sayHello);

// function calculate(a,b,callback){
//     const result = a+b
//     callback(result);
// }
// function display(result){
//     console.log(`${result}`);
// }
// calculate(10,20,display)

// spread operator 
// const numbers = [1, 2, 3];
// console.log(...numbers);

// rest operator
// function add(...numbers) {
//     console.log(numbers);
// }
// add(10, 20, 30);

// const user = {
//     name: "Rahul",
//     age: 25
// };
// const newUser = {
//     ...user
// };
// console.log(newUser);

// add new element using spread operator / update array
// const fruits = ["apple", "banana"];
// const newFruits = [...fruits, "orange", "mango"];
// console.log(newFruits);

// rest with destructuring
// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...remaining] = numbers;
// console.log(first);
// console.log(second);
// console.log(remaining);

// promise
// const promise = new Promise((resolve, reject) => {

//     let success = true;

//     if (success) {
//         resolve("Data received successfully");
//     } else {
//         reject("Something went wrong");
//     }

// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("operation completed")
//     });

// async/await
// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }

// async function showData() {
//     const data = await getData();

//     console.log(data);
// }

// showData();  

// Json
// const user = {
//     name: "Rahul",
//     age: 25
// };
// const jsonData = JSON.stringify(user);
// console.log(jsonData);