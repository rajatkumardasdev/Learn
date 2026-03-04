// 1. Check if number is even or odd.
let number = 13;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("odd");
}
// 2. Find largest of 3 numbers.
let a = 5, b = 10, c = 35;
// if (a > b && a > c){
//     console.log("a is largest");
// }else if (b > a && b > c){
//     console.log("b is largest");
// }else{
//     console.log("c is largest");
// }

let largest = Math.max(a, b, c);
console.log("Largest number is: " + largest);

// Check leap year.
let year = 2025;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// Voting eligibility checker.
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// Create calculator using switch.
let num1 = 5;
let num2 = 0;
let operator = "/";  // Change operator here

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;

    case "-":
        result = num1 - num2;
        break;

    case "*":
        result = num1 * num2;
        break;

    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Cannot divide by zero";
        }
        break;

    case "%":
        result = num1 % num2;
        break;

    default:
        result = "Invalid operator";
}

console.log("Result:", result);

// Check positive/negative/zero.

// Check divisible by 5 and 11.

// Grade system.

// Temperature converter.

// Profit or loss.

// Compare two strings.

// Check password length.

// Check vowel or consonant.

// Check if number between 1–100.

// Find smallest of four numbers.

// Compare == and ===.

// Traffic light system.

// Check triangle validity.

// Check if year is century.

// Simple login validation.