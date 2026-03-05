// Variables - Containers for storing data values, we can use var, let, or const to declare variables
let name = "John";// block-scoped variable, can be reassigned
const pi = 3.14; // Constant variable, cannot be reassigned
var age = 30; // 'var' is function-scoped, 'let' and 'const' are block-scoped

// Data Types - Different types of data in JavaScript
// there are 7 primitive data types in JavaScript: string, number, boolean, null, undefined, symbol, and bigint
let str = "Hello, World!"; // String
let num = 42; // Number
let bool = true; // Boolean
let nul = null; // Null
let undef; // Undefined
let sym = Symbol("unique"); // Symbol
let bigInt = 9007199254740991n; // BigInt

// non-primitive data type: Object, Array, Function
let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
function greet() { // Function
    console.log("Hello!");
}

// Concatenation - Combining strings
let firstName = "Jane";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Using + operator
console.log(fullName); // Output: Jane Doe

// Template Literals - A more modern way to concatenate strings
let greeting = `Hello, ${firstName} ${lastName}!`; // Using template literals
console.log(greeting); // Output: Hello, Jane Doe!