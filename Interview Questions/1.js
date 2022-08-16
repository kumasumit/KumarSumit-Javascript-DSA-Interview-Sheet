// 1. 
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);
// ans: 0 2 2 
// explanation: first number becomes 1, but since it is post increment,0 is logged and then number is 1, 
// in line number 4, 1 is incremented to 2, since it is preincrement, so 2 is logged, last log statement simply logs latest value of number which is 2.

// 2. 
// console.log(3+4+'5'); 
// ans: here implicit type conversion will occur and 3 and 4 will be converted to String, 3+4=7 7 is converted to string 7 and 5 are merged as 75 in string format

// // 3.
// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//    }
//    sayHi();
// ans: undefined and reference Error, 
// explanation: var name and let age , both are hoisted.
// it is written as 
// var name;
// let age;
// console.log(name); undefined
// console.log(age);  reference Error, when you use let variable before initialization.
// name = "Rahul";
// age = 21;    

// 4.
// function getAge(...args) {
//     console.log(typeof args);
// }
// getAge(21);
// here args is spread as Array, since there is no array data type in javascript, the type is object.
// ans: object   

// 5.
// console.log(!!null);
// console.log(!!'');
// console.log(!!1);
// ans: 
// false
// false
// true
// explanation: null is treated as false, !false is true, !true is false.
// '' is treated as false, !false is true, !true is false and so on.
// 1 is treated as truthy value, !1 is false, !false is true 

// 6. 
// When you click the paragraph, what's the logged output?
// <div onclick="console.log('div')">
//  <p onclick="console.log('p')">
//  Click here!
//  </p>
// </div>

// ans: p div. 
// explanation: here we are encountering a concept called event bubbling in which the event listeners are called from child to the parent.

// 7.
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//    }
//    for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//    } 

// ans: 3 3 3 for var , 0 1 2 for let
// because var is global scoped, here value is changed to 3 and then setTimeout is executed and let is block scoped so every iteration of i is bound to every iteration of setTimeout, hence we get 0 1 2.

// 8.
// this.radius = 10;
// const shape = {
//     radius: 10,
//     diameter() {
//     return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//     perimeterNew(){
//         return 2 * Math.PI * this.radius;
//     }
//    };
//    console.log(shape.diameter());
//    console.log(shape.perimeter());
//    console.log(shape.perimeterNew()); 
// ans: 
// 20
// NaN
// 62.8318530717958
// for arrow function this refers to the global object, since there is no this.radius in the global scope, it returns undefined.
// in 2nd case we have defined, this.radius in the global scope, so we take the value of this from window/global object, so arrow function also gives correct output
// 20
// 62.83185307179586
// 62.83185307179586 

// // 9. 
// const user = {
//     email: "my@email.com",
//     updateEmail: email => {
//     this.email = email
//     }
//     }
//     user.updateEmail("new@email.com")
//     console.log(user.email)
// ans: my@email.com
// here we are using this inside arrow function, it will not work so, updateEmail will fail and hence orginal mail is returned.    

// 10.
// const animals = {};
// let dog = { emoji: '🐶' }
// let cat = { emoji: '🐈' }
// animals[{ emoji: '🐶' }] = { ...dog, name: "Mara" }
// animals[{ emoji: '🐈' }] = { ...cat, name: "Sara" }
// console.log(animals[dog])
// ans: { emoji: '🐈', name: 'Sara' }
// explanation: it will take the latest updated value.

// 11.
// const user = {
//     email: "e@mail.com",
//     password: "12345"
//     }
//     const updateUser = ({ email, password }) => {
//     if (email) {
//     Object.assign(user, { email })
//     }
//     if (password) {
//     user.password = password
//     }
//     return user
//     }
//     const updatedUser = updateUser({ email: "new@email.com" })
//     console.log(updatedUser=== user)
// ans: true , because when we compare objects we compare the addresses not values of objects.

// 12. 
// let count = 0;
// const nums = [0, 1, 2, 3];
// nums.forEach(num => {
// if (num) count += 1
// })
// console.log(count)
// ans: 3, because 0 is a falsy value so the if loop will fail for num = 0, hence the loop will run for only 3 times.

// 13. 
// function Person(firstName, lastName) 
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');
// console.log(lydia);
// console.log(sarah);
// ans: 
// Person { firstName: 'Lydia', lastName: 'Hallie' }
// undefined
// because new keyword is not used there for sarah so no object is created for sarah   

// 14. 
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//    }
//    const member = new Person('Lydia', 'Hallie');
//    Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//    };
//    console.log(member.getFullName());
// ans: TypeError: member.getFullName is not a function

// 15.
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);
// ans: [ 1, 2, 3, <7 empty items>, 11 ]
// at poistion 10 in the array 11 is inserted, rest all middle positions are filled with empty spaces.

// 16.
// (() => {
//  let x, y;
//  try {
//  throw new Error();
//  } catch (x) {
//  (x = 1), (y = 2);
//  console.log(x);
//  }
//  console.log(x);
//  console.log(y);
// })();
// ans:
// 1
// undefined
// 2  
// explanation: here only the local copy of variable x is changed,
// so when we try to log x outside the catch loop, we get undefined.

// 17. 
// console.log([[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//     return acc.concat(cur);
//     },
//     [1, 2],
// ));
// ans: [ 1, 2, 0, 1, 2, 3 ]   
// explanation:
// the starting values for reduce function are 1,2 hence they are used, after that 0,1 and then 2,3 are used

// 18. 
// function greeting() {
//     throw 'Hello world!';
//    }
//    function sayHi() {
//     try {
//     const data = greeting();
//     console.log('It worked!', data);
//     } catch (e) {
//     console.log('Oh no an error:', e);
//     }
//    }
//    sayHi();
// ans: Oh no an error: Hello world!
// explanation: when we call the greeting function, it throws an error, which goes into the catch block, from there error is printed 



