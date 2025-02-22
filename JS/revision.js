// String, Number, Boolean, undefined, null

// Array and Object

// let bca = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// // INdex = 0,1,2,3,4,5,6,7,
// console.log(bca[0]);

// console.log(typeof bca); // Object
// console.log(typeof bca[0]); // Number

// console.log(typeof null); // Object

// let laptop = {
//   name: "Apple Macbook M1",
//   price: 150000,
//   color: "Silver",
//   screenSize: 15,
//   batteryLife: 12,
// };

// console.log(typeof laptop);

// Functions

// function sumOfNumber(a, b) {
//   return a + b;
// }

// console.log(sumOfNumber(10, 20));

// let student = {
//   name: "tarun",
//   age: 25,
//   isLogin: false,
//   grade: 85,
//   "subjects of students": ["math", "science", "english"],
//   work: function (position) {
//     console.log("Learning", position);
//   },
// };

// console.log(student.name);
// console.log(student.work("BCA STUDENT"));

// Array Methods

// forEach, map, filter.

let bca = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let for1 = bca.forEach((i) => {
//   console.log(i);
// });
// console.log(for1);

// console.log("--------------------------------");

// let for2 = bca.map((i) => {
//   return i * 2;
// });
let for2 = bca.map((i) => i * 2); // One Liner
console.log(for2);

console.log("--------------------------------");

let evenValues = bca.filter((i) => i % 2 == 0);
console.log(evenValues);
