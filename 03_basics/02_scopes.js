// let a = 10
// const b  = 20
// var c = 30 we never use  var 


let a =300
if (true) {
    let a = 10
    const b  = 20
    // console.log("INNER:",a );
    
    
}


// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "Rohan"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    two()
}

//one()


if (true) {
    const username = "Rohan"
    if (username === "Rohan"){
        const website =" youtube"
        // console.log(username + website);

        
    }
}

// ++++++++++++++++Intresting +++++++++++++

function addone(num){
    return num  + 1

}

addone(5) // this is one way of writing function in javascript


const addTwo = function(num){
    return num + 2

}

addTwo(5) // this is also a type of writing a function