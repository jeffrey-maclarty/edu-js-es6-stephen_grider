"use strict";

// var products = [
//     {name: 'cucumber', type: 'vegetable'},
//     {name: 'banana', type: 'fruit'},
//     {name: 'celery', type: 'vegetable'},
//     {name: 'orange', type: 'fruit'},
// ]

// 12
var filteredProducts = [];

// for (var i = 0; i < products.length; i++) {
//     if (products[i].type === 'fruit') {
//         filteredProducts.push(products[i]);
//     }
// }
// console.log(filteredProducts);

// DO NOT FORGET RETURN, YOU WILL END UP WITH AN EMPTY ARRAY
// filteredProducts = products.filter(function(product) {
//     return product.type === 'fruit';
// });
// console.log(filteredProducts);

// 13
var products = [
    {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    {name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    {name: 'celery', type: 'vegetable', quantity: 30, price: 9},
    {name: 'orange', type: 'fruit', quantity: 3, price: 5},
]

var filteredProducts2 = [];

filteredProducts2 = products.filter(function (product) {
    return (product.type === 'vegetable'
        && product.quantity > 0
        && product.price < 10);
})
console.log(filteredProducts2);

// 14

var post = {id: 4, title: "New Post"};

var comments = [
    {postId: 4, content: "Awesome Post"},
    {postId: 3, content: "it was okay"},
    {postId: 4, content: "neat"}
];


function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;
    })
}
console.log(commentsForPost(post, comments));

// Exercise 6
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;

filteredNumbers = numbers.filter(function (number) {
    return number > 50;
})
console.log(filteredNumbers);

// Exercise 7
var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers;

filteredUsers = users.filter(function (user) {
    return user.admin === true;
})
console.log(filteredUsers);

// Exercise 8
var filteredUsersNot;

filteredUsersNot = users.filter(function (user) {
    return user.admin !== true;
})
console.log(filteredUsersNot);