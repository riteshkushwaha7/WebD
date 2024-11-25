// arrays in js
// these are resizable means mutable it gives his shallow copy

// to push use array.push

const array = [1,2,3,4,5,6]
console.log(typeof array)

array.push(5)


array.pop()     // to pop

array.unshift(9) // to place at 0th location
array.shift() // to remove first element
console.log(array.includes(5)) // to find an element
console.log(array.indexOf(5)) // you know

console.log(array)  // to print array





// ***************** slice and splice *************


console.log("A", array)
const myn1 = array.slice(1,3) // this will not manupulates original array
console.log("B", myn1)
const myn2 = array.splice(1,3) // this will manupulates the original array
console.log("C",myn2) 
console.log("original",array)
