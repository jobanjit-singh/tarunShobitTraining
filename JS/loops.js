// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let n = 592;

// let sum = 0;

// while (n != 0) {
//   sum = sum + (n % 10);
//   n = parseInt(n / 10);
// }

// for (let i = n; i != 0; i = parseInt(i / 10)) {
//   sum = sum + (i % 10);
// }

// console.log(sum);

// For Each

let arr = [213, 234, 1234, 3456, 563];

let for1 = arr.forEach((i) => {
  console.log(i);
});
console.log(for1);

console.log("--------------DIVIDER--------------");

let for2 = arr.map((i, index) => {
  console.log(index);
  return index + 1;
});

// let for21 = arr.map((i, index) =>  index + 1);
// console.log(for21);

let evenVal = arr.filter((i) => i % 2 == 0);
console.log(evenVal);
