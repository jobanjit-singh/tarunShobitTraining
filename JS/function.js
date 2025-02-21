function sumOfDigits(n) {
  let sum = 0;

  while (n != 0) {
    sum = sum + (n % 10);
    n = parseInt(n / 10);
  }

  return sum;
}

let student1 = {
  name: "Tarun",
  work: (a) => {
    console.log("Learning", a);
  },
};

let result = sumOfDigits(123);

console.log(`The Result is ${result}`);
console.log(student1.work(2));

// The result is 6
