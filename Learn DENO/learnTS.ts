// let age: any;
// age = 20;
// age = 'foo';
// console.log(age);

// function add(a: number,b: number) {
//   return a + b;
// }

// console.log(add(5,9))

// function some(n: number) {
//   if(n%2 == 0) {
//     return "even"
//   }
//   return null
// }

// const value = some(4)!;
// value.substring(1);

// console.log(value)


//Array
// let fruits = [1, "orange", true, "apple", "banana"];
// fruits.push(25);

// console.log(fruits);

// let user: {
//   name: string; 
//   age: number
//   [key: string]: any
// };

// user = {
//   name: 'mike',
//   age: 27,
//   lastname: 'Lucy',
// };

// interface Person {
//   name: string;
//   age: number;
//   [key: string]: any
//   hello(): string;
// };

// let user: Person = {
//   name: 'Mike',
//   age: 20,
//   lastname: 'Lucy',
//   hello(){
//     return `Hello ${this.name} you're ${this.age}`
//   }
// };

// user.age = 27;
// console.log(user.hello())

// class Person {
//   constructor(
//     public name: string, 
//     public age: number){
//     this.name = name;
//     this.age = age;
//   }
// }

// class Student extends Person {
//   constructor(name: string, age: number){
//     super(name, age);
//   }
// }


// const map = new Map<number, string>();
// map.set(1, 'Mike')

// function getPromise<T>(value: T): Promise<T>{
//   return new Promise((res, rej) => setTimeout(() => res(value), 1000));
// }

// const value = await getPromise(1);
// console.log(value);

// enum UserRole {
//   ADMIN = 'admin', USER = 'user'
// }


// function isAdmin(c: UserRole) {
//   if(c === UserRole.ADMIN){
//     return true;
//   } 
//   return false;
// }

// const role: UserRole = UserRole.USER
// console.log(role)
// isAdmin(role)