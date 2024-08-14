// const promiseOne = new Promise( function( resolve , reject){
//     //Do adync tast
//     setTimeout(function(){
//         console.log('Aync tast is completed');
//         resolve()
        
//     }, 1000)
// }) 

// promiseOne.then(function(){
//     console.log('promise consume');
    
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Aync task');
//         resolve()
        
//     })
// }).then(function(){
//     console.log('aync to resolve');
    
// })


// 3rd 

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"shivsharan ",email: "shivsharanyadav9516@gmail.com"},2000)

//     })
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })

// promise 4
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"Alok",password:"Shiv@2002"})
//         }
//         else{
//             reject('ERROR: something went wrong')
//         }
//     })
// })
// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
    
// })
// .then((username) => {

//     console.log(username);
    

// })
// .catch(function(error){
//     console.log(error);
    
// })
// .finally(() => console.log("promishesh either resoloveor rejected"))



// async function getAllUser() {
//     try {
//         const response =  await  fetch('https://jsonplaceholder.typicode.com/posts')

//         const data =  await response.json()
//        console.log(data);



//     }
//     catch (error){
//         console.log("E:",error);
        
//     }
    
      
// }
// getAllUser()


// fetch ('https://jsonplaceholder.typicode.com/posts')
// .then((response)=> {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
    

// })
// .catch((error) => console.log(error))