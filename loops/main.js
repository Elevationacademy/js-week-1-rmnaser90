
// // Exercise 1
// let names= ['Rami', 'Ahmad','Zein'];
// let ages= [30,28,19];


// for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i]} is ${ages[i]} years old.`);
    
// }

// Exercise 2 & 3
let sum =0;
let myArray=[1,4,2,65,34,21,8,9];
let average=0

for (const i in myArray) {
    sum+=myArray[i];
}
average=sum / myArray.length;
console.log("sum: "+sum);
console.log("average: "+average);