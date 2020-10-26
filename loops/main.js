
// // Exercise 1
// let names= ['Rami', 'Ahmad','Zein'];
// let ages= [30,28,19];


// for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i]} is ${ages[i]} years old.`);
    
// }

// // Exercise 2 & 3
// let sum =0;
// let myArray=[1,4,2,65,34,21,8,9];
// let average=0

// for (const i in myArray) {
//     sum+=myArray[i];
// }
// average=sum / myArray.length;
// console.log("sum: "+sum);
// console.log("average: "+average);



// // EXercise 4 

// let nums=[]

// for(let i=0;i<100;i++){

//     nums[i]=i+1;
// }
// console.log(nums);


// //Exercise 5

// for (let num of nums) {
    
//     if (num%2) {
//         console.log(num);
//     }
// }


// // Exercise 6

// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// let lookForNum=709;

// for (let i in nums) {
//     if(nums[i]==lookForNum){
//         console.log("the index of 709 is: "+i);
//     }
// }

// // Exercise 7 & 8

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []


// for (let i = 0; i < names.length; i++) {
//    people.push({name: names[i], age:ages[i]})
    
// }

// console.log(people);

// for (let person of people) {
//     console.log(person.name+" is "+person.age+" years old.");
// }

// // Exercise 9

// const posts = [
//     {id: 165234, text: "Love this product"},
//     {id: 2762834, text: "This is the worst. DON'T BUY!"},
//     {id: 3982349, text: "So glad I found this. Bought four already!"}
//   ]
// console.log(posts);

//   let deletePostByID=prompt('eneter the Id of post to deleted')
//   let i=0
//   for (const post of posts) {

//     if (post.id == deletePostByID){

//         posts.splice(i,1);
//     }
      

//     i++;
//   }

//   console.log(posts);






  // Exercise 10
  const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
  
  let getPostByID= 2
  let deleteCommentById=2;
  let i=0
  for (const post of posts) {

    if (post.id == getPostByID){
            let j=0
       for (const comment of post.comments) {
           if (comment.id == deleteCommentById) {

            post.comments.splice(j,1);
               
           }
           j++;
       }
    }
      

    i++;
  }

  console.log(posts);