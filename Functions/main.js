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
    

// Exercise 3

const isEven= function(num){

if (num%2) {
    return false
}else{
    return true
}

}
randomNum = Math.floor(Math.random()*100);
console.log(randomNum);
console.log(isEven(randomNum));


console.log("Exercise 4 below");
// Exercise 4

const isEvenInArray = function (arr) {
    
    for (const num of arr) {
        if (!isEven(num)) {
            console.log(num);
            
        }
    }
}

let numArr=[3,4,5,8,10,11,6,22,23,71]
isEvenInArray(numArr)