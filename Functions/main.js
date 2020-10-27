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


// Exercise 6
const calculator={
    add: function(x,y){ return x+y},
    subtract: function(x,y){return x - y}
}




const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42
