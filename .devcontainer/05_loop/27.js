// for

let array = [1,2,3,4,5,6,7,8,9,10]

// for (let index = 0; index < array.length; index++){
//    const element = array[index];
//    console.log(element)
//}

// break and continue

// while(condition){
//iteration
// }

// do while


// let score = 1;
// do{
//     console.log(`score is ${score}`)
//     score++;
// } while(score <= 10)

// high order loops *************
// for array specific loops
// for of 

const arr = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(i)
// }

// maps

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"AMERICA")

map.set('NEP',"NEPAL")

map.set('FR',"France")

// for (const [key,value] of map) {
//     console.log(key,value)
// }


const obj = {
    a:"A",
    b:"B",
    c:"C"
}

// for in
// array ki keys uski index return karega, obj mein uski key, wheras for of mein vakue dega array mein
// map is not iterable 
// for (const key in obj) {
//     console.log(key, obj[key]);
// }



// for each loop
function func(print){
    console.log(print)
}

arr.forEach(func);


const people = [
    {
      name: "John Doe",
      age: 30,
      isEmployed: true
    },
    {
      name: "Jane Smith",
      age: 25,
      isEmployed: false
    },
    {
      name: "Sam Johnson",
      age: 40,
      isEmployed: true
    }
  ];
  

  people.forEach((item) =>{
    console.log(item.name)
  })

