// Fibonacci series
let num = 10,
  num1 = 0,
  num2 = 1,
  nextNum,
  i;
console.log("\n First " + num + " numbers of Fibonacci series are: ");

for (i = 1; i <= num; i++) {
  console.log(num1);
  nextNum = num1 + num2;
  num1 = num2;
  num2 = nextNum;
}

// Find and Count the the prime number from 1 to 100 using for loop
console.log("\n Prime numbers from 1 to 100 are: ");

let totalPrimeNumbers = 0;
for (let i = 1; i <= 100; i++) {
  let count = 0;
  for (let j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      count++;
      break;
    }
  }
  if (count == 0 && i != 1) {
      console.log(i);
      totalPrimeNumbers++;
  }
}

console.log("Total prime numbers from 1 to 100 are: " + totalPrimeNumbers);



// Check a letter vowel or not using switch case
console.log("\n \n \n Check a letter vowel or not:");

let letter = "o";
switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(letter + " is a vowel");
    break;
  default:
    console.log(letter + " is not a vowel");
}