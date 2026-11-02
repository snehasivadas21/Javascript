// class Student {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     displayDetails(){
//         console.log(this.name)
//         console.log(this.age)
//     }
// }

// const s1 = new Student("A",10)
// const s2 = new Student("B",20)

// s1.displayDetails();
// s2.displayDetails();

// encapsulation
// class BankAccount {
//     #balance;

//     constructor(initialBalance){
//         this.#balance = initialBalance
//     }

//     deposit(amount){
//         if (amount > 0){
//             this.#balance += amount;
//         } else {
//             console.log("Invalid deposit amount")
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// const account = new BankAccount(1000);
// account.deposit(500);
// console.log(account.getBalance());

// inheritance
// class Parent {
//     constructor(name) {
//         this.name = name;
//     }
    
//     learn() {
//         console.log(this.name + "learning")
//     }
// }

// class Child extends Person {
//     dance() {
//         console.log(this.name + "dancing")
//     }
// }

// const p1 = new Child("A")
// p1.learn()
// p1.dance()

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Child extends Parent {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
//   display() {
//     console.log(this.name + " " + this.age);
//   }
// }

// const c1 = new Child("A", 67);  
// c1.display();  

// class Employee {
//     #salary

//     constructor(name, salary){
//         this.name = name;
//         this.#salary = salary;
//     }

//     getSalary() {
//         return this.#salary;
//     }

//     work() {
//         console.log(this.name)
//     }
// }
// class Developer extends Employee {
//     work() {
//         console.log(this.name)
//     }
// }
// class Manager extends Employee {
//     work() {
//         console.log(this.name)
//     }
// }

// const employees = [new Developer("A",50), new Manager("B",70)]

// for (const emp of employees) {
//     emp.work();
//     console.log(emp.getSalary());
// }