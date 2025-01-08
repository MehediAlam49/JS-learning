// Left align pyramid
console.log("\n Left align pyramid");

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

// for (let i = 1; i <= 5; i++){
//     let str = "";
//     for (let j = 5; j >= i; j--) {
//         str += "*";
//     }
//     console.log(str);
// }

// Right align pyramid
console.log("\n Right align pyramid");

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5 - i; j++) {
    str += " ";
  }
  for (let k = 1; k <= i; k++) {
    str += "*";
  }
  console.log(str);
}

// Middle align pyramid
console.log("\n Middle align pyramid");

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5 - i; j++) {
    str += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }
  console.log(str);
}

// FizzBuzz game
console.log("\n FizzBuzz game");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 3 == 0) {
    console.log(i + " Fizz");
  } else if (i % 5 == 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i);
  }
}

// Least common multiple (LCM) of two numbers
console.log("\n Least common multiple (LCM) of two numbers");

let num1 = 12;
let num2 = 15;
let lcm = num1 * num2;
for(let i=1; i<=lcm; i++){
    if(i%num1==0 && i%num2==0){
        lcm = i;
        break;
    }
}
console.log(`The LCM of ${num1} and ${num2} is: ${lcm}`);



// HCF (Highest Common Factor) of two numbers
console.log("\n HCF (Highest Common Factor) of two numbers");

let number1 = 56, number2 = 98, i = 1, hcf;
while (i <= number1 && i <= number2) {
  if (number1 % i == 0 && number2 % i == 0) {
    hcf = i;
  }
  i++;
}
console.log(`The HCF of ${number1} and ${number2} is: ${hcf}`);
