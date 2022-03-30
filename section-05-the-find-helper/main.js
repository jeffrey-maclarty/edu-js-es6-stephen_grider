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