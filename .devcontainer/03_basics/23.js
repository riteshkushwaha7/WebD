// arrow function

const user = {
    username: "ritesh",
    price: 1000,
    welcome: function(){
        console.log(`${this.username}, welcome to webiste`);
        console.log(this)
    }

}
// user.welcome();
// user.username = "satyam"
// user.welcome();

// function chai(){
//     console.log(this)
// }
// // console.log(chai())
// chai()

const chai = () => {
    console.log(this)
}
chai()

const addtwo = (num1,num2) => { //explicit
    return num1+num2
}
console.log(addtwo(3,7))

const add = (num1,num2) => num1+num2  // called implicit return

console.log(add(3,7))