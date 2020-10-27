// // exercise 1



// const calcAge = function(currentYear,birthYear){

// return currentYear-birthYear;



// }

// const age = calcAge(2017, 1989);
// console.log(age);


// // exercise 2



// const calcAge = function(currentYear,birthYear){
//     let age = currentYear-birthYear;
//     let result = `You are either ${age} or ${age-1}`
//     return result;
    
    
    
//     }
    
//     const age = calcAge(2018, 2015);
//     console.log(age);
    

// // Exercise 3

// const isEven = function(num){

// if (num%2) {
//     return false
// }else{
//     return true
// }

// }
// randomNum = Math.floor(Math.random()*100);
// console.log(randomNum);
// console.log(isEven(randomNum));


// console.log("Exercise 4 below");
// // Exercise 4

// const isEvenInArray = function (arr) {
    
//     for (const num of arr) {
//         if (!isEven(num)) {
//             console.log(num);
            
//         }
//     }
// }

// let numArr=[3,4,5,8,10,11,6,22,23,71]
// isEvenInArray(numArr)

// // Exercise 5


// const checkExists=function (arr,num) {

//     for (const n of arr) {
//         if (n==num) {
//             return true;
//         }else {
//             return false;
//         }
//     }
    
// }

// const needle= 7;
// const stack=[3,4,2,5,1,6,2];

// console.log( checkExists(stack,needle) );


// // Exercise 6
// const calculator={
//     add: function(x,y){ return x+y},
//     subtract: function(x,y){return x - y}
// }




// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42


// // Exercise 7

// const increaseByNameLength =function(Money,Name){ return Money*Name.length}
// const makeRegal = function(Name){return "His Royal Highness, "+Name}


// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


// //  Extension Challenge
// const splice = function(array, index, count, item1, item2) {

//     let newArr = [];
//     let deletedArray = [];
//     if (count != undefined) {
//         for (let i = 0; i < array.length; i++) {
//             if (i == index) {
//                 for (let j = 0; j < count; j++) {
//                     deletedArray.push(array[i])
//                     i++
//                 }
//                 if (item1 != undefined) {
//                     newArr.push(item1)
//                 }
//                 if (item2 != undefined) {
//                     newArr.push(item2)
//                 }

//             }
//             newArr.push(array[i]);
//         }
//     } else {

//         for (let i = 0; i < array.length; i++) {
//             if (i < index) {
//                 newArr.push(array[i])
//             } else {
//                 deletedArray.push(array[i])
//             }
//         }
//     }


//     for (let i = 0; i < newArr.length; i++) {
//         array[i] = newArr[i];
//     }
//     while (array.length > newArr.length) {
//         array.pop();
//     }
   
//     return deletedArray
// }




// // remove 1 element
// let arrr = [1, 2, 3]
// splice(arrr, 0, 1);
// console.log(arrr); //should be [2,3]


// // add 1 element
// arr = [1, 2, 3]
// splice(arr, 0, 0, 0);
// console.log(arr); //should be [0,1,2,3]


// // add 2 elements
// arr = [1, 2, 3]
// splice(arr, 0, 0, -1, 0);
// console.log(arr); //should be [-1,0,1,2,3]


// // replace 1 element
// arr = [1, 2, 3]
// splice(arr, 1, 1, 55);
// console.log(arr); //should be [1,55,3] 


// // delete all elements from index to end
// arr = [1, 2, 3, 4, 5]
// splice(arr, 1);
// console.log(arr); //should be [1] 


// // returns array of deleted elements
// arrz = [1, 2, 3]
// let deleted = splice(arrz, 1);
// console.log(deleted); //should be [2,3] 


// // returns an array of the deleted element (1 element)
// arr = [1, 2, 3]
// deleted = splice(arr, 1, 1);
// console.log(deleted); //should be [2] 


// // returns an empty array when no elements are deleted
// arr = [1, 2, 3]
// deleted = splice(arr, 1, 0, 5);
// console.log(deleted); //should be [] 





// overriding the native splice method
Array.prototype.splice = function(index, count, item1, item2){
    // write your code here  
let array=this;
    let newArr = [];
    let deletedArray = [];
    if (count != undefined) {
        for (let i = 0; i < array.length; i++) {
            if (i == index) {
                for (let j = 0; j < count; j++) {
                    deletedArray.push(array[i])
                    i++
                }
                if (item1 != undefined) {
                    newArr.push(item1)
                }
                if (item2 != undefined) {
                    newArr.push(item2)
                }

            }
            newArr.push(array[i]);
        }
    } else {

        for (let i = 0; i < array.length; i++) {
            if (i < index) {
                newArr.push(array[i])
            } else {
                deletedArray.push(array[i])
            }
        }
    }


    for (let i = 0; i < newArr.length; i++) {
        array[i] = newArr[i];
    }
    while (array.length > newArr.length) {
        array.pop();
    }
  
    return deletedArray

}

// remove 1 element
let arr = [1,2,3]
arr.splice(0,1); 
console.log(arr); //should be [2,3]


// add 1 element
arr = [1,2,3]
arr.splice(0,0,0); 
console.log(arr); //should be [0,1,2,3]


// replace 1 element
arr = [1,2,3]
arr.splice(1,1,55); 
console.log(arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
arr.splice(1); 
console.log(arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
let deleted = arr.splice(1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = arr.splice(1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = arr.splice(1,0,5); 
console.log(deleted); //should be [] 

