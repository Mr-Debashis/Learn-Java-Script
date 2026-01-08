
/*
JavaScript Date Objects let us work with dates:
Thu Jan 08 2026 22:16:15 GMT+0530 (India Standard Time)

Date objects are static. The "clock" is not "running".
The computer clock is ticking, date objects are not.

JavaScript Date Output. By default, JavaScript will use the browser's time zone and display a date as a full text string:
Thu Jan 08 2026 22:16:15 GMT+0530 (India Standard Time)
You will learn much more about how to display dates, later in this tutorial.

*/

/*
Date objects are created with the new Date() constructor.
There are 9 ways to create a new date object:

new Date()
new Date(date)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)

*/

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


console.log(new Date(2023, 0, 23));
console.log(new Date(2023, 0, 23, 5, 3));
console.log(new Date("2023-01-14"));

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time `);


newDate.toLocaleString('default', {
    weekday: "long",
    
})

