"use strict";

// 15
var users = [
    {name: "Jill", id: 1},
    {name: "Alexi", id: 2},
    {name: "Bill", id: 3},
    {name: "Alex", id: 4}
]

var user;

// for (var i = 0; i < users.length; i++) {
//     if (users[i].name === "Alex") {
//         user = users[i];
//     }
// }

// console.log(user);

// ONLY THE FIRST MATCHING ELEMENT WILL BE RETURNED
user = users.find(function (user) {
    return user.name === "Alex";
});

console.log(user);

// 16
function Car(model) {
    this.model = model;
}

var cars = [
    new Car("Buick"),
    new Car("Camaro"),
    new Car("Focus")
];

console.log(cars);

cars.find(function (car) {
    return car.model === "Focus";
})

//

var posts = [
    {id: 1, title: "New Post"},
    {id: 2, title: "Old Post"}
];

var comment = {postId: 1, content: "Great Post"};

function postForComment(post, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));


// Exercise 9
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;

admin = users.find(function (user) {
    return user.admin === true;
})

// Exercise 10
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;

account = accounts.find(function (account) {
    return account.balance === 12;
})

