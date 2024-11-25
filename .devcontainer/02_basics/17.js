// through constructor make obect

const user = new Object()

user.id = "756"
user.name = "RItesh"
user.age = 20

const obj1 = {1: "abc", 2: "xyz", 3:"pqrs"}
const obj2 = {3: "tyr", 5: "trs", 6:"nqrt"}                 // to return target objects from multiple objects
                                                // if key is same then it will be updates*********

// const obj3 = Object.assign({},obj1,obj2)
// console.log(Object.assign(obj1,obj2))

const obj4 = {...obj1, ...obj2};
// console.log(Object.keys(obj4));             // keys
// console.log(Object.keys(obj4));             // values

// console.log(Object.entries(obj4));

console.log(obj4.hasOwnProperty('2'));         // to find with keys




