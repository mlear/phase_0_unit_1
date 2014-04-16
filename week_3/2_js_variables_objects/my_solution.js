// I paired with Zach Pflederer on this challenge.




// Pseudocode
// We will declare a variable called secretNumber equal to 1
// We will set secretNumber equal to 7
// We will create a new variable called password and we will set it equal to "password"
// We will set password equal to "just open the door"
// We will create a new variable called allowedIn and we will set it to true.
// We will set allowedIn to false.
// We will create a new variable memmbers and set it equal to 2.
// We will set members equal to an array of 1, 2, 3.
// We will set the first value of members to "John".
// We will set the forth value of members to "Mary".


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", 2, 3, "Mary"];




// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// The code is already as simple as it possibly can be.



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
//  This exercise was a great introduction to Javascript and Test Driven Development.
//  I paired with Zach on this, and we had fun trying to predict the variables that were
//  going to asked for.  He was a great help and resource, and can't wait to pair with
//  him again.  We did run into one snag when I was driving however, we kept getting a 
//  runtime error.  After resetting my command line, I quickly realized that it was me,
//  not typing node before my_solution.js, and it was quickly fixed.

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

