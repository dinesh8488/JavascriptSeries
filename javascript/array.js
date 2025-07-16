// javascript array are resizable and can contain mix of different datatypes
// javascript arrays are not associateive arrays and so array element cannot be accessed using arbitary strings

// const myArray = [0,1,2,3,4,5]
// console.log(myArray[0])

// javascript array copy operations create shallow copy 

// shallow copy means : shallow copy of an object of a copy whose share the same references means if we change anything then it will change the original one also like stack
// deep copy : it will not share the same references 

// Declaration of an Array is :

// const arr1 = [1,2,3,4,5]
// console.log(typeof arr1)
// console.log(arr1)
// const arr2 = ["dinesh","kumar","chaudhary"]
// console.log(arr2)
// const arr3 = new Array("dinesh","chaudhary")
// console.log(arr3);

// arr1.push(7)
// console.log(arr1)
// arr1.pop()
// console.log(arr1)

// arr1.unshift(9)
// console.log(arr1)

// includes means to check if exit or not -------------------------------------------includes()-----------------------

// console.log(arr1.includes(9))

// ------------------------------------------------------ (JOIN) ----------------------------------
// const newArr = arr1.join()
// console.log(arr1)
// console.log(newArr)
// console.log(typeof newArr)

// slice , splice

// slice
// const arr1 = [1,2,3,4,5]
// console.log("A", arr1)
// const myarrSlice = arr1.slice(1,3)
// console.log("Slice", myarrSlice);
// console.log("A", arr1)
// const myarrSplice = arr1.splice(1,3)
// console.log("Splice",myarrSplice);

// const hero1 = ["dinesh","kumar","chaudhary"]
// const hero2 = ["i","am","very","dangerous"]

// hero1.push(hero2)
// console.log(hero1)

// console.log(hero1[3][3])

// concat and spread method

// const concat_hero1_hero2 = hero1.concat(hero2)
// console.log('Concat : ',concat_hero1_hero2);

// // spread means now it's not an array it become the indivisual 
// const spread_hero1_hero2 = [...hero1, ...hero2]
// console.log('Spread : ',spread_hero1_hero2);

// @dinesh8488 ➜ /workspaces/JavascriptSeries/javascript (main) $ node array.js 
// Concat :  [ 'dinesh', 'kumar', 'chaudhary', 'i', 'am', 'very', 'dangerous' ]
// Spread :  [ 'dinesh', 'kumar', 'chaudhary', 'i', 'am', 'very', 'dangerous' ]
// @dinesh8488 ➜ /workspaces/JavascriptSeries/javascript (main) $ ^C


// flat using Array

// const another_array = [1,2,3,[4,5,6],[7,8],9]
// const result = another_array.flat(Infinity)

// console.log(result)
// // [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]

// we asking that dinesh is array or not so it will answer is No 
console.log(Array.isArray("dinesh")); 

// now we convert this into array
console.log(Array.from("dinesh"));

