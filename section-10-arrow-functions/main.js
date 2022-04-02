"use strict";

// const add = function(a, b) {
//     return a + b;
// }

// add(1, 2);
// console.log(add(1, 2));

// 1 - remove function keyword
/*

const add = (a, b) {
    return a + b;
}

*/

// 2 - place arrow
// const add = (a, b) => {
//     return a + b;
// }

// add(1, 2);
// console.log(add(1, 2));


// 1 - if using a single expression, you can remove curly braces ( {} )
// and remove the return keyword
const add = (a, b) => a + b;

add(1, 2);
// console.log(add(1, 2));


// const double = function (number) {
//     return 2 * number;
// }

// 1 - if there is a single argument (number) you can remove the parentheses
// const double = (number) => 2 * number;
const double = number => 2 * number;

double(8);
console.log(double(8));


const numbers = [1, 2, 3];
let number;

numbers.map(function (Number) {
    return 2 * number;
})

numbers.map(number => 2 * number);


//
const team = {
    members: ["Jane", "Bill"],
    teamName: "Super Squad",
    teamSummary: function () {
        return this.members.map(function (member) {
            console.log(`${member} is on team ${team.teamName}`)
            return `${member} is on team ${team.teamName}`;
        })
    }
}


