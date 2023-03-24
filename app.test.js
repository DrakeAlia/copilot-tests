// Unit testing made easy with copilot:
function calculator(str) {
    // regex to match the numbers and the operators
    const regex = /(\d+)([+\-*/])(\d+)/;
    // use match method to get the numbers and the operator
    const match = str.match(regex);
    // use parseInt to convert the numbers to integers
    const num1 = parseInt(match[1]);
    const num2 = parseInt(match[3]);
    // use switch to evaluate the operator
    switch (match[2]) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}
// test calculator function
console.log(calculator('1+2')); // 3
console.log(calculator('1-2')); // -1
console.log(calculator('1*2')); // 2
console.log(calculator('1/2')); // 0.5

// create unit tests for the calculator function
const assert = require('assert');
assert.equal(calculator('1+2'), 3, "calculator can add");
assert.equal(calculator('1-2'), -1, "calculator can subtract");
assert.equal(calculator('1*2'), 2, "calculator can multiply");
