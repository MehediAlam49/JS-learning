// user define function

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
console.log(subtractionOfTwoNumber(6, 5));

// LCM of two number
function lcmOfTwoNumber(num1, num2) {
    let lcm = (num1 * num2) / (gcdOfTwoNumber(num1, num2));
    return lcm;
}
console.log(lcmOfTwoNumber(6, 5));

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
console.log(gcdOfTwoNumber(6, 5));