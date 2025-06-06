// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =  Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);


const bigNumber = 484548




//  Refrence (Non Primitive)

// Array, Objects, Functions

const heros =["batman", "superman"]

//objects are defined in {}
{
    name:"rohan",
    age=23
}

const myfunction = function(){
    console.log("Helllo  world");

}




//++++++++++++++++++++++++++++++++++++++++

// Stack memory(Primitive), Heap memory(Non-Primitive)

let myYoutubename = "RohanMankar"

let anothername = myYoutubename
anothername = "MankarRohan"

console.log(myYoutubename);
console.log(anothername);

// this was an example of stack memory

let userone = {
    email: "Rohan@google.com",
    upi:  "rohan@ybl"
}
 let usertwo = userone

 usertwo.email = "mankar@google.com"

 console.log(userone.email);
 console.log(usertwo.email);

 // this is a example of heap memory
 
