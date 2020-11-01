const container=document.getElementById('container')

var getFavicon = function(){
    var favicon = undefined;
    var nodeList = document.getElementsByTagName("link");
    for (var i = 0; i < nodeList.length; i++)
    {
        if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
        {
            favicon = nodeList[i].getAttribute("href");
        }
    }
    return favicon;        
}

const addTab=function (tabList) {

    let html=`
   
    `
    for (let tab of tabList) {
        html=`
        <a class="tab" href="${tab.href}"><div class="icon">${tab.name[0].toUpperCase()}</div><p class="iconTxt">${tab.name}</p></a>` ;
        container.innerHTML=html + container.innerHTML
    }
    
}
let lisOfTabs=[
{id:0 ,name:'apple', icon:'A', href:"https://www.apple.com/shop"},
{id: 1,name:'Bingo', icon:'B', href:"bingo"},
{id:2 ,name:'Canva', icon:'C', href:"https://www.canva.com/"},
{id: 3,name:'Youtube', icon:'D',href:"https://www.youtube.com/"},
{id:4 ,name:'Elevation', icon:'E',href:"https://kernel.elevation.ac/courses"},
{id:5 ,name:'Facebook', icon:'F',href:"https://www.facebook.com/"}

]

console.log(lisOfTabs);
addTab(lisOfTabs)

function addShortcut() {
    
    let name = prompt("enter the name of shortcut")
    let icon = prompt("enter the Icon")
    let href = prompt("enter url")
    if (name==null&&icon==null) {
        console.log("you cannot add empty shortcut");
         return
        }
        
   
    lisOfTabs.unshift({['id']:lisOfTabs.length,name,icon,href})
    addTab(lisOfTabs.slice(0,1))
    console.log(lisOfTabs);

}

