// const pone = new Promise(function(resolve, reject)
// {
// // do an async task
// // DB calls, cryptography, networl
// setTimeout(function(){
//     console.log('Async task is complete')
//     resolve( )
// },1000)
// })

// pone.then(function(){
//     console.log("Promise consumed")
// })

// const newp = new Promise(function(resolve,reject) {
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({})
//         }else{
//             reject('rejected')
//         }
//     },1000)
// })

// async function consumep(){
//     try {
//         const response = await newp
//     console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumep()

async function getdata(){
    try {
        const res = await fetch('https://api.github.com/users/riteshkushwaha7')
        // const data = await res.json()
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

getdata()






