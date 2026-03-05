// import the readline-sync module to read user input from the console
const readlineSync = require('readline-sync');

// Get user's name
const userName = readlineSync.question('May I know your name? ');
console.log(`Welcome, \${userName}!`);

// Get user's age
const userAge = readlineSync.question('May I know your age? ');

// Convert the input to a number
const userAgeNumber = Number(userAge);

// Check if the conversion was successful
// !isNaN() is a function that checks if the value is Not-a-Number (NaN). If the value is a valid number, it returns false; if it's not a valid number, it returns true. By using the logical NOT operator (!), we can check if the value is a valid number before performing calculations.
if (!isNaN(userAgeNumber)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`You were born in the year ${birthYear}.`);
} else {
    console.log('Please enter a valid number for age.');
}
