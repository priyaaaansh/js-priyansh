// Singleton

// Object Literals
const JsUser = {
    name:"Priyansh",
    age:21,
    location:"Jaipur",
    email: "priyansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Wednesday"]
}


// console.log(JsUser.email);
// console.log(JsUser["name"]);

// JsUser.email = "priyansh@nothing.com"
// console.log(JsUser["email"]);

// Object.freeze(JsUser) // it freezes all the values nothing can be changed after that

// JsUser.email="systum@systum"
// console.log(JsUser["email"]);



JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User ${this.name} `);// this. shows all the function created inside
}

console.log(JsUser.greetingTwo());
console.log(JsUser.greeting());

