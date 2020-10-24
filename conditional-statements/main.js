// // Exercise 1
// var numChild= prompt("enter the number of your children")
// var isCareful=false;

// if (isCareful) {

//     numChild++;
    
// }
// console.log(numChild);



// // Exercise 2

// var silverwareCount=prompt("enter the number of silverware:");

// if (silverwareCount%2) {
//     console.log("something is missing");
// }else{
// console.log("all good");
// }

// // Excerices 3

// let performance = "stellar"
// let salary = 10000
// const goodBonus = 1000
// const stellarBonus = 3000

// if (performance == "stellar"){


//     salary+=stellarBonus;
// }else{

//     salary+=goodBonus;
// }
// console.log("Your new salary is:"+salary);

// // Excercise 4

// const isVip = false;
// let cash = 300;

// if ( isVip || cash>300) {
 
//     console.log("Welcome to the Club");
// }else{

// console.log("the Club is fully booked");
// }

// excercise 5
const a = 3
let b = 2
let c = 0 || 12
let d
console.log(a+" "+b+" "+c+" "+d);
b = c  //b=12
b++    // b=13
if(d){   // d undefined
  b = a
}

d = a + (b * c)  //  3+ (13*12)=159
d++  // d= 160
b += 2; // b =15

  // 3  15  12   160
console.log(a+" "+b+" "+c+" "+d);


// Excercise 6


const gender = "female";
let profession = "business";

if (gender=="male") {
    profession+="man";
    
}else if (gender =="female") {
    profession+="woman";
}else{
    profession+="person";
}


console.log(profession);


