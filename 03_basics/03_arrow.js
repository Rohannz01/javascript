const user = {
    username: "rohan",
    price: 999,

welcomeMessage: function(){
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
    
}
}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     let username = "Rohan"
//     console.log(this.username);
    

// }

// coffee()


const coffee = () => {
    let username = "Rohan"
   // console.log(this.username);
}

// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }   this is called as explicit return

// const addTwo = (num1, num2)=> num1 + num2


// const addTwo = (num1, num2)=> (num1 + num2)  // this is called as implicit  return


const addTwo = (num1, num2)=> ({username:"rohan"})

console.log(addTwo(3, 4));

