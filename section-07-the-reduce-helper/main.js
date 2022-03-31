"use strict";

var numbers = [ 10, 20, 30 ];
var sum = 0;

for (var i = 0; i < numbers.length ; i++) {
    sum += numbers[i];
}
// console.log(sum);

numbers.reduce(function (sum, number) {
    // console.log(sum + number);
    return sum + number;
}, 0)

//

var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
]

primaryColors.reduce(function (accumulator, primaryColor) {
    accumulator.push(primaryColor.color);

    // console.log(accumulator);
    return accumulator;
}, [])

//

// "()()()()" balanced parentheses
// "(((())))" balanced parentheses
// "))))" unbalanced parentheses
// "())))" unbalanced parentheses
// ")(" unbalanced parentheses

function balancedParens(string) {
    return !string.split("").reduce(function(accumulator, char) {
        if (accumulator < 0) {
            return accumulator;
        }
        if (char === "(") {
            return ++accumulator;
        }
        if (char === ")") {
            return ++accumulator;
        }
        return accumulator;
    }, 0)
}

balancedParens("((((");

// Exercise 14
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce(function (accumulator, trip) {
    return trip.distance += accumulator;
}, 0)
console.log(totalDistance);

// Exercise 15
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function() {

}, { sitting: 0, standing: 0 });

