// nested scope 

one()
function one(){
    const username = "ritesh";
 //console.log(website)
    two()
}
two() // here we can not call function before its intializatuon
const two = function() {
    const webiste = "youtube"
    console.log(two)
}