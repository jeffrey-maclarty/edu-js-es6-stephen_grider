"use strict";

// section 9
var numbers = [1, 2, 3];
var doubledNumbers = [];

// for (var i = 0; i < numbers.length; i++) {
//     doubledNumbers.push(numbers[i] * 2);
//     console.log(doubledNumbers);
// }

// numbers.forEach(function (number) {
//     doubledNumbers.push(number * 2);
//     console.log(doubledNumbers);
// })

// ***DO NOT FORGET THE RETURN STATEMENT***
// var doubles = numbers.map(function(number) {
//     console.log(number * 2);
//     return number * 2;
// })
// console.log(doubles);

// section 10
// var cars = [
//     {model: 'Buick', price: 'CHEAP'},
//     {model: 'Camaro', price: 'expensive'}
// ];
//
// var prices = cars.map(function (car) {
//     console.log(car.price);
//     return car.price;
// })
// console.log(prices);

// Exercise 3
var images = [
    {height: '34px', width: '39px'},
    {height: '54px', width: '19px'},
    {height: '83px', width: '75px'},
];

var heights = [];

heights = images.map(function (image) {
    return image.height;
})
console.log(heights);

// Exercise 4
var trips = [
    {distance: 34, time: 10},
    {distance: 90, time: 50},
    {distance: 59, time: 25}
];

var speeds;

speeds = trips.map(function (trip) {
    return trip.distance / trip.time;
})
console.log(speeds);

// Exercise 5
var paints = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'yellow'}
]

var colors = [];

colors = paints.map(function (paint) {
    return paint.color;
})
console.log(colors);
// returnreturn