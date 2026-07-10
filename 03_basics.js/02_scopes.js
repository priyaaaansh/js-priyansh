// scope is denoted by = {}

let a = 300
if (true){
    let a =10;
// console.log("inner: ", a)
}
// console.log("outer:", a)



function one(){
    const username= "Priyansh"

    function two(){
        const website = "Youtube"
        // console.log(username)
    }
// console.log(website);
two()
}
one()


if(true){
    const username = "Priyansh"
    if (username === "Priyansh"){
        const website = " Youtube"
        // console.log(username+ website)
    }
}

// *************************** Interesting ***************************

// console.log(addone(5))
function addone(num){
    return num+1
}
// console.log(addone(5))
const addTwo= function addone(num){
    return num+2
}
console.log(addTwo(5))