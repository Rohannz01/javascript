
function sayMyName(){
    //  console.log("r");
    //  console.log("o");
    //  console.log("h");
    //  console.log("a");
    //  console.log("n");
}

//sayMyName()

// function addTwoNumbers(Number1, Number2){

//     console.log(Number1 + Number2);
// }

function addTwoNumbers(Number1, Number2){
    let result = Number1 + Number2
    return result
    return Number1 + Number2
} 

const result = addTwoNumbers(3, 5 )
// console.log("Result: ", result);

// addTwoNumbers(3, 4)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
        
    }
    return`${username} just logged in` 
}

// console.log(loginUserMessage("Rohan"));
// console.log(loginUserMessage()); // if no  value is passed through it then the  output will be undefined

function calculateCartPrice(...num1) {
    return num1
    
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "rohan",
    price: 199
}
 function handleObject(anyobject){
    console.log(`Username is  ${anyobject.username} and price is ${anyobject.price}` );

    
 }

//  handleObject(user)
handleObject({
    username: "rahul",
    price: 677
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
