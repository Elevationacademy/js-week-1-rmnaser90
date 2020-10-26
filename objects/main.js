// //Excercise 1
// let p1= {
// name: 'Robert',
// age: 30,
// city:'new york'
// }

// let p2= {

// name: 'Jill',
// age: 30,
// city: 'new york'
// }


// if(p1.age==p2.age){

// if (p1.city==p2.city) {
//     console.log("Jill wanted to date Robert");
// }else {
//     console.log("Jill wanted to date Robert, but couldn't");
// }

// }

// //Excecise 2 & 3 & 4

// let myList=[
//     {
//         name: 'Rami',
//         age: 30,
//         city:'Jerusalem'
//     },
//     {
//         name: 'Ahmad',
//         age: 28,
//         city:'Jerusalem'

//     }];
//     console.log(myList[0].age);

//     myList[0].age=32;

// console.log(myList[0].age);

// myList.splice(1,1);

// console.log(myList);

// // excercise 3
// let mySecondList=[
//     {
//         name: 'Barbara',
//         age: 25,
//         city:'Lebanon'
//     },
//     {
//         name: 'David',
//         age: 34,
//         city:'Tel aviv'

//     }];

//     myList.push(...mySecondList);
//     console.log(myList);


// // Excercise 4

// const library={
//                 books:  [{
//                             title: 'the future of the mind',
//                             author:'Michio Kaku'

//                 },
//                 {
//                     title: 'Physics of the future',
//                     author:'Michio Kaku'

//         }

//                     ]

// };

// myList.push(...library.books)
// console.log(myList);


// // Excercise 5 5.1 5.2

// const reservations = {
//     bob: { claimed: false },
//     ted: { claimed: true }
//   }

//   let name = prompt('Please enter the name for your reservation').toLowerCase();

// if(reservations[name]){
//     if (!reservations[name].claimed) {
//     console.log("welcome, "+name);
//     reservations[name].claimed= true;
//     }else{
//         console.log("someone claimed you reservation");

//Extensions

const date = 3
let message = ''
const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 780,
        works: true, // choose one
        items: [{
                name: "cheese",
                expiryDate: 7
            },
            {
                name: "raddish",
                expiryDate: 1
            },
            {
                name: "bread",
                expiryDate: 1
            }
        ]
    }
}
let fridgeWorks=kitchen.fridge.works;
let expiresIn = date - (kitchen.fridge.items[1].expiryDate);
if (expiresIn >= 1) {
    message += "Geraldine's " + kitchen.fridge.items[1].name + " expired " + expiresIn + (expiresIn == 1 ? " day ago. " : " days ago. ");

    if (fridgeWorks) {
        message += "Weird, considering her fridge works. "
    } else {
        message += "Probably because her fridge doesn't work. "
    }
    if (kitchen.hasOven) {
        message += "Luckily, she has an oven to cook the " + kitchen.fridge.items[1].name + " in."
    } else {
        message += "Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[1].name + " in."
    }
    if (!fridgeWorks) {

        message += " And she'll have to pay " + kitchen.fridge.price/2 + " to fix the fridge.";
    }

}


console.log(message);