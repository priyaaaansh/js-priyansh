// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// console.log(typeof(Date));

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date (2026,06, 9 , 3 , 12)
// let myCreatedDate = new Date ("07-09-2026")

// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000))


// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);


// console.log(`hello, today is ${newDate.getDay()} of this week`)

newDate.toLocaleString('default',{
    weekday: "long",
    
})