// function MyName(){
//     console.log("hi i am dinesh");

    
// }

// MyName()


// function AddTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// AddTwoNumbers(8,8)

// function userMessage(userName){

//     if (userName === undefined){
//         console.log("please enter the username");
//         return
//     }
//     return `${userName} : Just Logged in `
// }

// const result = userMessage("dinesh")
// console.log(result);

// rest operators

// ...num this is an rest operator which store the data in array 

// function addingNumbers(...num){
//     console.log(num);
// }

// addingNumbers(300,32,23233)


// user = {
//     userName: "dineshKumar",
//     address: "Selaqui",
// }

// function handleObject(anyObject){
//     console.log(`UserName is : ${anyObject.userName} and address is ${anyObject.address}`);
// }

// // handleObject(user)

// // we can also give the object in parameter like this 
// handleObject({
//     userName: "dinnuChaudhary",
//     address: "Selaqui",
// })

// const myNewArray = [200,400,222,700]

// function returnSecondValues(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValues(myNewArray));

// userData = {
//     fullName: "dineshChaudhary",
//     address: "Selaqui"
// }

// function handleObjectData(anyObjectData){
//     console.log(anyObjectData.fullName);
// }

// handleObjectData(userData)

// Global access data

// let a = 30 
// if (true){
//     let a = 50
//     console.log('inner ',a);
// }
// console.log(a);


// let arr = [10,34,23,45,11]
// let i =0
// while(i<arr.length){
//     console.log(arr[i]);
//     i++
// }

// jab bhi current contest ko refer karte hai toh uske sath hum log ---- this --- keyword use karte hai

// user = {
//     userNamefirst: "dinesh",
//     age: 24,

//     user: function(){
//         console.log(this.userNamefirst);
//     }
// }

// user.user()
