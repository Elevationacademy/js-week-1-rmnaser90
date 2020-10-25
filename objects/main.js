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

//Excecise 2 & 3 & 4

let myList=[
    {
        name: 'Rami',
        age: 30,
        city:'Jerusalem'
    },
    {
        name: 'Ahmad',
        age: 28,
        city:'Jerusalem'

    }];
    console.log(myList[0].age);

    myList[0].age=32;

console.log(myList[0].age);

myList.splice(1,1);

console.log(myList);


let mySecondList=[
    {
        name: 'Barbara',
        age: 25,
        city:'Lebanon'
    },
    {
        name: 'David',
        age: 34,
        city:'Tel aviv'

    }];

    myList.push(...mySecondList);
    console.log(myList);

const library={
                books:  [{
                            title: 'the future of the mind',
                            author:'Michio Kaku'

                },
                {
                    title: 'Physics of the future',
                    author:'Michio Kaku'

        }

                    ]

};

myList.push(...library.books)
console.log(myList);