"use strict";

// 6
var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(function (color) {
    console.log(color);
})

// 7
// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
var sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(function (number) {
    sum += number;
})

// Print the sum variable
console.log(sum);

// Exercise 1
var posts;

function handlePosts() {
    posts = [
        {id: 23, title: 'Daily JS News'},
        {id: 52, title: 'Code Refactor City'},
        {id: 105, title: 'The Brightest Ruby'}
    ];

    for (var i = 0; i < posts.length; i++) {
        savePost(posts[i]);
    }
}

// posts.forEach(function(post) {
//     console.log(post);
// })

// Exercise 2
var images = [
    {height: 10, width: 30},
    {height: 20, width: 90},
    {height: 54, width: 32}
];

var areas = [];

images.forEach(function (image) {
    // console.log(image);
    // console.log(image.height * image.width);
    // return image.height * image.width;
areas.push(image.height * image.width);
})