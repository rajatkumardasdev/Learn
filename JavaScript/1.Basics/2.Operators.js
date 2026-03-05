// Operators
// 1. Arithmetic Operators-- its used to perform mathematical operations(+, -, *, /, %, **)
let a = 10;
let b = 5;
// addition
console.log(a + b); // Output: 15
// subtraction
console.log(a - b); // Output: 5
// multiplication
console.log(a * b); // Output: 50
// division
console.log(a/b);// Output: 2
// modulus- returns the remainder of a division operation
console.log(a % b); // Output: 0
// exponentiation- returns the result of a base raised to the power of an exponent
console.log(a ** b); // Output: 100000
// -------------------------------------------------------------------------------------------------
// 2. Assignment Operators-- its used to assign values to variables(=, +=, -=, *=, /=, %=, **=)
let x = 10;
// assignment= assign the value of 10 to x
x = 20; // x is now 20
// addition assignment= assign the result of x + 5 back to x
x += 5; // x is now 25 (20 + 5)
// subtraction assignment-- assign the result of x - 10 back to x
x -= 10; // x is now 15 (25 - 10)
// multiplication assignment-- assign the result of x * 2 back to x
x *= 2; // x is now 30 (15 * 2)
// division assignment-- assign the result of x / 3 back to x
x /= 3; // x is now 10 (30 / 3)
// modulus assignment-- assign the result of x % 4 back to x
x %= 4; // x is now 2 (10 % 4)
// exponentiation assignment-- assign the result of x ** 3 back to x
x **= 3; // x is now 8 (2 ** 3)
// -------------------------------------------------------------------------------------------------
// 3. Comparison Operators-- its used to compare values and return a boolean result(==, ===, !=, !==, >, <, >=, <=)
let m = 10;
let n = "10";
// equality operator-- compares values for equality, performs type coercion if necessary
console.log(m == n); // Output: true (because of type coercion)
// strict equality operator-- compares values for equality without performing type coercion
console.log(m === n); // Output: false (because they are of different types)
// inequality operator-- compares values for inequality, performs type coercion if necessary
console.log(m != n); // Output: false (because of type coercion)
// strict inequality operator-- compares values for inequality without performing type coercion
console.log(m !== n); // Output: true (because they are of different types)
// greater than operator-- checks if the left operand is greater than the right operand
console.log(m > 5); // Output: true
// less than operator-- checks if the left operand is less than the right operand
console.log(m < 15); // Output: true
// greater than or equal to operator-- checks if the left operand is greater than or equal to the right operand
console.log(m >= 10); // Output: true
// less than or equal to operator-- checks if the left operand is less than or equal to the right operand
console.log(m <= 20); // Output: true
// -------------------------------------------------------------------------------------------------
// 4. Logical Operators-- its used to combine multiple boolean expressions and return a boolean result(&&, ||, !)
let p = true;
let q = false;
// logical AND operator-- returns true if both operands are true, otherwise returns false
console.log(p && q); // Output: false
// logical OR operator-- returns true if at least one operand is true, otherwise returns false
console.log(p || q); // Output: true
// logical NOT operator-- returns the opposite boolean value of the operand
console.log(!p); // Output: false
console.log(!q); // Output: true
// -------------------------------------------------------------------------------------------------
// 5. Bitwise Operators-- its used to perform bitwise operations on binary numbers(&, |, ^, ~, <<, >>, >>>)
let r = 5; // In binary: 0101
let s = 3; // In binary: 0011
// bitwise AND operator-- performs a bitwise AND operation on each pair of corresponding bits
console.log(r & s); // Output: 1 (In binary: 0001)
// bitwise OR operator-- performs a bitwise OR operation on each pair of corresponding bits
console.log(r | s); // Output: 7 (In binary: 0111)
// bitwise XOR operator-- performs a bitwise exclusive OR operation on each pair of corresponding bits
console.log(r ^ s); // Output: 6 (In binary: 0110)
// bitwise NOT operator-- performs a bitwise NOT operation on each bit, inverting the bits
console.log(~r); // Output: -6 (In binary: 1010, which is the two's complement representation of -6)
// left shift operator-- shifts the bits of the left operand to the left by the number of positions specified by the right operand
console.log(r << 1); // Output: 10 (In binary: 1010)
// right shift operator-- shifts the bits of the left operand to the right by the number of positions specified by the right operand
console.log(r >> 1); // Output: 2 (In binary: 0010)
// unsigned right shift operator-- shifts the bits of the left operand to the right by the number of positions specified by the right operand, filling the leftmost bits with zeros
console.log(r >>> 1); // Output: 2 (In binary: 0010)
// ---------------------------------------------------------------------------------------------------
// 6. Ternary Operator-- its a shorthand for an if-else statement(condition ? expressionIfTrue : expressionIfFalse)
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote yet.";
console.log(canVote); // Output: Yes, you can vote!
// --------------------------------------------------------------------------------------------------
// 7. Typeof Operator-- its used to determine the type of a variable or expression(typeof variableOrExpression)
let value = 42;
console.log(typeof value); // Output: number
let text = "Hello, World!";
console.log(typeof text); // Output: string
let isTrue = true;
console.log(typeof isTrue); // Output: boolean
let obj = { name: "Alice", age: 25 };
console.log(typeof obj); // Output: object
let undef;
console.log(typeof undef); // Output: undefined
// Note: typeof null returns "object" due to a historical bug in JavaScript, but null is actually a primitive value representing the absence of any object value.
console.log(typeof null); // Output: object

// --------------------------------------------------------------------------------------------------

// 8. instanceof Operator-- its used to check if an object is an instance of a specific class or constructor function(object instanceof constructor)
function Person(name) {
    this.name = name;
}
let person1 = new Person("Alice");
console.log(person1 instanceof Person); // Output: true
console.log(person1 instanceof Object); // Output: true
console.log(person1 instanceof Array); // Output: false