"use strict";

function getMessage () {
    const year = new Date().getFullYear();

    // return "The year is " + year;
    // return `The year is ${year}`;
    return `The year is ${new Date().getFullYear() - 2000}`;
}

console.log(getMessage());


// Exercise 19
function doubleMessage(number) {
  return `Your number doubled is ${(2 * number)}`;
}

// Exercise 20
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}