// 1.Converting Data Types
// 1. String to Number
let strNum = "123";
let num1 = Number(strNum); // Using Number() function
console.log(num1); // Output: 123
let num2 = parseInt(strNum); // Using parseInt() function
console.log(num2); // Output: 123

// 2. String to Boolean
let strBool = "true";
let bool2 = (strBool === "true"); // Using strict equality operator
console.log(bool2); // Output: true

// 3. Number to String
let num3 = 456;
let str1 = String(num3); // Using String() function
console.log(str1); // Output: "456"
let str2 = num3.toString(); // Using toString() method
console.log(str2); // Output: "456"

// 4. Number to Boolean
let num4 = 0;
let bool3 = Boolean(num4); // Using Boolean() function
console.log(bool3); // Output: false

// 5. Boolean to String
let bool4 = true;
let str3 = String(bool4); // Using String() function
console.log(str3); // Output: "true"
let str4 = bool4.toString(); // Using toString() method
console.log(str4); // Output: "true"

// 6. Boolean to Number
let bool5 = false;
let num5 = Number(bool5); // Using Number() function
console.log(num5); // Output: 0
