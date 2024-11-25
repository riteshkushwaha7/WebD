var marvel = ["thor","ironman","spiderman", "doctor_strange"];
var dc = ["superman","flash","batman"];
const array = ["rocky","garuda"]

// marvel.push(dc)    it will push the dc element as single element as single array
// console.log(marvel)

// [
//   'thor',
//   'ironman',
//   'spiderman',
//   'doctor_strange',
//   [ 'superman', 'flash', 'batman' ]
// ]

marvel = marvel.concat(dc);    // concat return new array
// console.log(marvel); 

// merging multiple array top notch metch called spread method


const newarray = [...marvel, ...dc,...array]
// console.log(newarray)

const anotherarray = [1,2,3,[1,2,[4,5,6]],[8,9,[7,5,4]]]
const afterflat = anotherarray.flat(Infinity)         // to define depth pass paramenter inside falt
// so we passed maximum possible depth ust as a hack
// console.log(afterflat)


// console.log(Array.isArray(anotherarray));
// console.log(Array.from("Ritesh"));
console.log(Array.of(afterflat,anotherarray,marvel,dc)); // make array from arguments
