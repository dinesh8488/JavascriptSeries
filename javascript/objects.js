// we can declare the object in two ways first is literal and second is constructor

// singleton -> koi bhi construction s object bnate hai toh wo singleton object banta hai 

// jab bhi literal k tarah s define krte hai toh single ton object nhi banta hai 

// object literals

// const userOne = {}
// console.log(typeof userOne);

// this is also way to declare the object , this is constructor methods or isi k andr singleton lagta hai
// Object.create 

// here name is key and "dinesh" is values

// const mysym = Symbol("key1")
// const useOne = {
//     name: "dinesh",
//     age: 23,
//     email: "dinu@gmail.com",
//     mysym: "key2",
//     isLoggedIn: false,
//     lastLoginDays: ["monday","saturday"]
// }

// // now i want to access the object 
// // first declarations
// console.log(useOne.name);
// // second declarations, here we take each object as string
// console.log(useOne["age"]);

// // change the value of object
// useOne.email = "dinesh@gmail.com"
// console.log(useOne);

// we can also freeze our Object , Once we freeze if we want to change the object then it will not chnage

// Object.freeze(useOne)
// useOne.email = "hell@gmail.com"
// console.log(useOne);


// UserOne = {
//     email_id: "dinesh@gmail.com",
//     name: "dineshChaudhary",
// }

// // Object.freeze(UserOne)
// UserOne.email_id = "changed@gmail.com"
// console.log(UserOne);

// // dinesh@dinesh-Aspire-A315-58:~/javascript$ node object.js 
// // { email_id: 'dinesh@gmail.com', name: 'dineshChaudhary' }
// // dinesh@dinesh-Aspire-A315-58:~/javascript$ node object.js 
// // { email_id: 'changed@gmail.com', name: 'dineshChaudhary' }
// // dinesh@dinesh-Aspire-A315-58:~/javascript$

// UserOne.make_function = function(){
//     console.log("this is function");
// }

// UserOne.new_function = function(){
//     // when we want to write the variable of object then we must use single semi colon
//     console.log(`this is dinesh ${this.email_id}`);
//     console.log(`this is now next ${this.name}`);
    
    
// }
// console.log(UserOne.make_function());
// console.log(UserOne.new_function());


// two way to declare the object , both will have same output
// const tinderUser1 = new Object()
// console.log(tinderUser1);
// const tinderUser = {}
// console.log(tinderUser);
// {}{}

// now object k andr object declare krna like nesting 

// const customer = {
//     email_id: "customer@gmail.com",
//     full_name: {
//         customer_name: {
//             name: "dinesh@gmail.com",
//             age: 23
//         }
//     },
//     address: "selaqui"
// }

// console.log(customer.full_name.customer_name.name);


// now we have to combined two objects 

// const obj1 = {
//     1: "a",
//     2: "b"
// }
// const obj2 = {
//     3: "c",
//     4: "d"
// }

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const obj4 = { obj1, obj2}
// console.log(obj4);

// dinesh@dinesh-Aspire-A315-58:~/javascript$ node object_two.js 
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// another way 

// const obj5 = Object.assign({}, obj1,obj2)
// console.log(obj5);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// array k andr object ko acess kese kare

// const myarr = [
//     {
//         id: 1,
//         emai_id: "dinesh@gmail.com"
//     },
//     {
//         id:2,
//         emai_id: "h@gmail.com"
//     }
// ]
// console.log(myarr[1].emai_id);


// const tinderUser = {
//     firstName: "dinesh",
//     middleName: "kumar",
//     lastName: "chaudhary"
// }

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// // har ek key value hai usko array mai bna deta hai , array k andr array
// console.log(Object.entries(tinderUser));

// [ 'firstName', 'middleName', 'lastName' ]
// [ 'dinesh', 'kumar', 'chaudhary' ]
// [
//   [ 'firstName', 'dinesh' ],
//   [ 'middleName', 'kumar' ],
//   [ 'lastName', 'chaudhary' ]
// ]

