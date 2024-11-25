// Dates
let mydate = new Date()
console.log(mydate)    // 2024-11-25T09:48:47.846Z
console.log(mydate.toString())   // Mon Nov 25 2024 15:18:47 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleDateString()) // 25/11/2024
console.log(typeof mydate) // object


let mycreatedate = new Date(2024,11,25)
console.log(mycreatedate.toDateString()) // Wed Dec 25 2024            month 0 se start hota hai

