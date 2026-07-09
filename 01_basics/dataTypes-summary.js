// # Primitive Data Types
// 7 types: string, number, boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.4

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId)

// const bigNumber = 3456145678765n
// console.log(bigNumber)


// ****************** Reference(Non primitive) ****************** 
// Array, Objects, Functions

// const heros = ["ironman", "spiderman", "hulk"];

// let myObj = {
//     name: "tony",
//     age: 45,
//     isAvenger: true
// }

// const myFunction = function(){
//     console.log("hello world");
// }

// *****************************************************************

// Stack (Primitive), Heap(Non-Primitive)


let myYoutubeName = "Priyansh the Coder"
let anotherName = myYoutubeName
anotherName = "coding karega kya ?"

console.log(myYoutubeName);
console.log(anotherName); 

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}
let userTwo = userOne
userTwo.email = "priyansh@google.com"
console.log(userOne.email);
console.log(userTwo.email);