// objects in javascript

// singleton --- through literals ❌
// singleton --- through constructor  

// object literals
// object
const JsUser = {
    name:"Ritesh",    // name is string and value can be anything,
    branch:"IT",
    age:20
}

console.log(JsUser) // print all object
console.log(JsUser["branch"]);
console.log(JsUser.age); 
// both work



// const JsUser = {
//     name:"Ritesh",    
//     branch:"IT",
//     [mysmybol]:"key1",          for symbol
//     age:20
// }


// referencing function through objects

JsUser.func = function(){
    console.log("You referneced the function successfully");
}
console.log(JsUser.func());  // oh yeah



