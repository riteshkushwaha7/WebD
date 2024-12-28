// truthy and falsy value

// falsy

// false,0,-0,BigInt 0n, "", null, undefined, NaN

// rest all truth
"0", 'false', " ", [], {}, function(){}

//nullish calescing operator (??): null undefined

let val;
// val = 5 ?? 10
val = undefined ?? 10
 // gives best case avoid null and undefined


// console.log(val)


// terniary operator

let cal = 6;

cal > 5 ? console.log("cal is gretaer than 5") : console.log("less than 5")

