// if
// const isUserLoggedIn = true
// if(isUserLoggedIn){

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if( userLoggedIn && debitCard ){
    console.log("Allow to buy ");
}

if( loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in ")
}

