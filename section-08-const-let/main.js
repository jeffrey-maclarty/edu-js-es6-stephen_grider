"use strict";

// var color = "red";
// console.log(color);

// var name = "Jane";
// var title = "Software Engineer";
// var hourlyWage = 40;

// ES6
// 25

// const name = "Jane";
let title = "Software Engineer";
let hourlyWage = 40;

// later...

title = "Senior Software Engineer";
hourlyWage = 45;

// 26
function count(targetString) {
    // var characters = ["a", "e", "i", "o", "u"];
    const characters = ["a", "e", "i", "o", "u"];
    // var number = 0;
    let number = 0;

    for (var i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++;
        }
    }
    return number;
}

console.log(count("aeiobzxceiaipbiox"));

// Exercise 17
const name = "J";
let age = 11;
const datOfBirth = "January 1, 2011";


// Exercise 18
const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}