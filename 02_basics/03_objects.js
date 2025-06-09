// singleton
// object.create

const { jsxs } = require("react/jsx-runtime");

// object literals

const mySym = Symbol("key1")

const  JsUser = {
    name: "Rohan",
    "full name": "Rohan Mankar",
    [mySym]: "myKey1",
    age: 23,
    location: "Nagpur",
    email: "rohan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "rohan@chatgpt.com"
// Object.freeze(JsUser) // .freeze Freezing an object is equivalent to preventing extensions and then changing all existing properties' descriptors
JsUser.email = "rohan@microsoft.com"
// console.log(JsUser["email"]);


JsUser.greetings = function () {
    console.log("Hello JS user");
}
JsUser.greetingsTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());

