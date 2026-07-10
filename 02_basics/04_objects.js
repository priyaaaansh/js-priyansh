// const tinderUser = new Object()

const tinderUser ={}
tinderUser.id= "123abc"
tinderUser.name= "abc"
tinderUser.isLoggedIn= false


// console.log(tinderUser);

const regularUser = {
    email:"sum@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Priyansh",
            lastName: "Thapar"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)

// console.log(regularUser.fullName) 

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = Object.assign({}, obj1, obj2);      // add arrays easily 
const obj4 = {...obj1,...obj2};


// console.log(obj3);
// console.log(obj4);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// ************************* DeStructuring *************************

const course = {
    courseName: "Priyansh ke pravachan",
    price: "999",
    courseInstructor: "Priyansh"
};
// course.courseInstructor

const {courseInstructor}= course 
// console.log(courseInstructor);


// {
//     "name" :"Priyansh",
//     "couseName" : "wow pravachan",
//     "price" :"free"
// };


[
    {},
    {},
    {},
    {}
]