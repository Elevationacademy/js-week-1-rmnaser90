const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}




const cleanStr=function (str) {
    
let arr=str.toLowerCase().split('')
for (let i in arr) {
    for (const char of specialChars) {
        if (arr[i]==char) {
            arr.splice(i,1)
            i--;
            break
        }
    }
}

return arr.join('')
}


const countWords= function(str){
arr=cleanStr(str).split(' ');
wordCounts[' ']=arr.length-1

for (let i=0;i<arr.length;i++) {
    let count=0
    let tempWord=arr[i]
    for (let j=0;j<arr.length;j++) {
  
        if(tempWord==arr[j]){
            count++
            arr.splice(j,1)
            i=-1
            j--
        }


    
    }
    wordCounts[tempWord]=count
}


}


countWords(story);

console.log(wordCounts);



console.log(cleanStr(story));

// I'm not sure what is '' = 6 in suggested anwer in kernel