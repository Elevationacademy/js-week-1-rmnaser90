// //Excercise 1

// const person = {
//     hungry: true,
  
//     feed: function () {
//       if (this.hungry) {
//         this.hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }
  
//   person.feed() //should alert "I'm no longer hungry"


// //   Excercise 2

// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
//   };
  
//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };
  
//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  


// // Exercise 3

// const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };
  
//   const airplane = {
//       fuel:0,
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }
//   };
  
//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());
  

// // Exercise 4


// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function(coin){

// this.coinCount-=coin;

//     }
//   };
  
//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
  

// // Exercise 5 (challenge)

// const revealSecret = function () {
//     return this.secret;
//   };
  
//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " +result);
//   };
  
//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   };
  
//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };
  
//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);

// // Exercise 6 Challenge

// const coffeeShop = {
//     beans: 40,
  
//     drinkRequirements: {
//       latte: 10,
//       americano: 5,
//       doubleShot: 15,
//       frenchPress: 12
//     },
  
//     makeDrink: function (drinkType) {
//       // TODO: Finish this method
//         if(this.drinkRequirements[drinkType]==undefined){
//             alert("Sorry, we don't make filtered")
//         }else{
//             if(this.beans<this.drinkRequirements[drinkType]){
//                 alert("Sorry, we're all out of beans");
//             }else{
//                 alert("Enjoy your "+ drinkType)
//                 this.beans-=this.drinkRequirements[drinkType]
//             }
//         }

//     }
//   }
  
//   coffeeShop.makeDrink("latte"); 
//   coffeeShop.makeDrink("americano");
//   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
//   coffeeShop.makeDrink("doubleShot");
//   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  

// // Exercise 6.1 Challenge

// const coffeeShop = {
//     beans: 40,
  
//     drinkRequirements: {
//       latte: 10,
//       americano: 5,
//       doubleShot: 15,
//       frenchPress: 12
//     },
  
//     makeDrink: function (drinkType) {
//       // TODO: Finish this method
//         if(this.drinkRequirements[drinkType]==undefined){
//             alert("Sorry, we don't make filtered")
//             return
//         }
//         if(this.beans<this.drinkRequirements[drinkType]){
//                  alert("Sorry, we're all out of beans");
//                 }else{
//                 alert("Enjoy your "+ drinkType)
//                 this.beans-=this.drinkRequirements[drinkType]
//               }
        

//     }
//   }
  
//   coffeeShop.makeDrink("latte"); 
//   coffeeShop.makeDrink("americano");
//   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
//   coffeeShop.makeDrink("doubleShot");
//   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  





// Extension 1 & 2 Challenge

const coffeeShop = {
    beans: 40,
    money: 0,
    drinkRequirements: {
      latte: {beanReq:10, price: 5},
      americano: {beanReq:5, price: 2.5},
      doubleShot: {beanReq:15, price: 7.5},
      frenchPress: {beanReq:12, price: 6}
    },
  
    makeDrink: function (drinkType) {
      // TODO: Finish this method
        if(this.drinkRequirements[drinkType]==undefined){
            alert("Sorry, we don't make filtered")
            return
        }
        if(this.beans<this.drinkRequirements[drinkType].beanReq){
                 if(this.buyBeans(this.drinkRequirements[drinkType].beanReq)){ this.makeDrink(drinkType) }
                 
                }else{
                alert("Enjoy your "+ drinkType)
                this.beans-=this.drinkRequirements[drinkType].beanReq
                this.money+=this.drinkRequirements[drinkType].price
              }
        

    },

    buyBeans: function(amount){ // 1 bean costs 0.5 money
        if (this.money>=(amount * 0.5)) {
            this.beans+= amount
            this.money-= amount * 0.5
            return true
        }else{
            alert("sorry! we don't have enough money to buy "+amount+" beans")
            return false
        }


}

  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  
  console.log( coffeeShop);