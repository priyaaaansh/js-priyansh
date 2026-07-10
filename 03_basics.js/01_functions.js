
function sayMyName(){
    // console.log("P");
    // console.log("R");
    // console.log("I");
    // console.log("y");
    // console.log("A");
    // console.log("N");
    // console.log("S");
    // console.log("H");
} 

//sayMyName()

// function addTwoNumbers(number1,number2){
//    console.log(number1 + number2);
// }
// addTwoNumbers(3,7)


function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}
const result = addTwoNumbers(3,5)
// console.log(result)

 function loginMessage(username){
    if (!username){
    // if (username === undefined){
        // console.log("please enter a username")
        return
    }
    return `${username} just logged in `
 }
//  console.log(loginMessage("Priyansh"))
//  console.log(loginMessage())

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,500))

// Function inside an object

const user={
    userName: "Priyansh",
    language:"Hindi",
}
function handleObject(anyObject){
    // console.log(`username is ${anyObject.userName} & language is ${anyObject.language}`);
}

// handleObject(user);
handleObject({
    userName: "sam",
    language: "hindi",
})


// arrays 

const myNew = [200,300,400,500,600]

function returnSecondValue(yoyo){
    return yoyo[2]
}
console.log(returnSecondValue(myNew));

