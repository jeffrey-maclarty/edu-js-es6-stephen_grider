"use strict";

var computers = [
    { name: "Apple, ram: 24"},
    { name: "Compaq, ram: 4"},
    { name: "Acer, ram: 32"}
]

var allComputersCanRunPrograms = true;
var onlySomeComputersCanRunProgram = false;

// for (var i = 0; i < computers.length; i++) {
//     var computer = computers[i];
//
//     if (computers.ram < 16) {
//         allComputersCanRunPrograms = false;
//     } else {
//         onlySomeComputersCanRunProgram = true;
//     }
// }

// console.log(allComputersCanRunPrograms);
// console.log(onlySomeComputersCanRunProgram);

// && between iteration
computers.every(function (computer) {
    return computer.ram > 16;
})

// || between iteration
computers.some(function (computer) {
    return computer.ram > 16;
})

var names = [
    "Alexandria",
    "Matthew",
    "Joe"
]

var namesEvery = names.every(function (name) {
    return name.length > 4;
})

// console.log(namesEvery);

var namesSome = names.some(function (name) {
    return name.length > 4;
})

// console.log(namesSome);

//

function  Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010"); // added

username.validate() && password.validate();

var fields = [username, password, birthdate];

fields.every(function (field) {
    return field.validate();
})

// if (formIsValid) {
    // allow user to submit
// } else {
    // error message
// }

// Exercise 12
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted;

hasSubmitted = users.every(function (user) {
    return user.hasSubmitted === true;
})

console.log(hasSubmitted);

// Exercise 13
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;

inProgress = requests.some(function (request) {
    return request.status === 'pending';
})

console.log(inProgress);