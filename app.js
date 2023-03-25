// Asking Copilot interview questions:

// q: What does SOLID stand for?
// a: SOLID is an acronym for the first five object-oriented design (OOD) 
// principles by Robert C. Martin, popularly known as Uncle Bob. These principles, 
// when combined together, make it easy for a programmer to develop software that are 
// easy to maintain and extend. They are also called the 
// five principles of object-oriented design.

// q: What is the Single Responsibility Principle?
// a: A class should have only one reason to change.

// q: What is the Open/Closed Principle?
// a: Software entities (classes, modules, functions, etc.) should be open for

// Regex simplified with copilot:

// regex to match the phone number in the format (xxx) xxx-xxxx
// const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

// test phoneRegex against the phone number with console.log
// console.log(phoneRegex.test('(123) 456-7890')); // true


// Choosing from multiple solutions by copilot:

// create a function that takes a string and returns it backwards
function reverseString(str) {
  return str.split('').reverse().join('');
}

// test the reverseString function
console.log(reverseString('hello')); // olleh