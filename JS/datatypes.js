let name = "tarun";
let age = 25.4;
let isLogin = false;
let table;
let weather = null;

let arr = [123, 123, 123, 123, 123];
let student = {
  name: "tarun",
  age: 25,
  isLogin: false,
  grade: 85,
  "subjects of students": ["math", "science", "english"],
};

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLogin);
console.log(typeof table);
console.log(typeof weather);

console.log(typeof arr[0]);
console.log(student["subjects of students"]);

console.log(Object.keys(student));
console.log(Object.values(student));
