// user define function-------------------->

// Sum of two number
function sumOfTwoNumber(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(`Sum of ${6} and ${5} is: ${sumOfTwoNumber(6, 5)}`);

// Subtraction of two number
function subtractionOfTwoNumber(num1, num2) {
    let subtraction = num1 - num2;
    return subtraction;
}
console.log(`Subtraction of ${6} and ${5} is: ${subtractionOfTwoNumber(6, 5)}`);

// LCM of two number
function lcmOfTwoNumber(num1, num2) {
    let lcm = (num1 * num2) / (gcdOfTwoNumber(num1, num2));
    return lcm;
}
console.log(`LCM of ${6} and ${5} is: ${lcmOfTwoNumber(6, 5)}`);

// GCD of two number
function gcdOfTwoNumber(num1, num2) {
    let gcd;
    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
        }
    }
    return gcd;
}
console.log(`GCD of ${6} and ${5} is: ${gcdOfTwoNumber(6, 5)}`);

// Factorial of a number
function factorialOfNumber(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(`Factorial of ${6} is: ${factorialOfNumber(6)}`);


// Anonymous function-------------->
console.log("\n Anonymous function");

// Sum of two number
let sumTwoNumber = function (num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(`Sum of ${6} and ${5} is: ${sumTwoNumber(6, 5)}`);

// Subtraction of two number
let subtractionTwoNumber = function (num1, num2) {
    let subtraction = num1 - num2;
    return subtraction;
}
console.log(`Subtraction of ${6} and ${5} is: ${subtractionTwoNumber(6, 5)}`);

// // LCM of two number
// let lcmTwoNumber = function (num1, num2) {
//     let lcm = (num1 * num2) / (gcdTwoNumber(num1, num2));
//     return lcm;
// }
// console.log(`LCM of ${6} and ${5} is: ${lcmTwoNumber(6, 5)}`);

// GCD of two number
let gcdTwoNumber = function (num1, num2) {
    let gcd;
    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
        }
    }
    return gcd;
}
console.log(`GCD of ${6} and ${5} is: ${gcdTwoNumber(6, 5)}`);

// Factorial of a number
let factorialNumber = function (num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(`Factorial of ${6} is: ${factorialNumber(6)}`);