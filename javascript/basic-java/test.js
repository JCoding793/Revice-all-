// "use strict" //treat all JS code as newser version 
function EvenAndOdd(num){

    if(num / 2){


        console.log("Even");
    }else{
        console.log("Odd");

    }
}




function LogicalOperation(parm , parm1){
    // if you are convert string into number let num = Number(parma) 
    if (parm > parm1){
        console.log("Value is grather than paramter 1");
    }else if (parm == parm1){
        console.log("Value is equal to paramter 1 ");
        
    }else{
        console.log("Pleae give me other paramter")
    }

}

LogicalOperation(5 , 5)
EvenAndOdd(3);

// we are using node js not bro
//readbility not  type 

let scrore = "5";
// while(){

//     i++;
// }
console.log(typeof scrore);
let valueNumber = Number(scrore)
console.log(typeof valueNumber);
console.log(scrore + 1 )
//operation 

// string undefind , bolloean , number , null , bignit , synbo
// araay ofject function
let i = 1;
while(i <= 10){
    
     console.log(i)
     if(i == 9){
        console.log("Happy New Year");
        break;
     }
    i++;
}


//typeof ()  defing datatype
//simple function 😂😂 but very cofusing for me 
function CheckIfNumber(val1 , val2){
let DataNum= typeof(val1);
let DataNum1= typeof(val2);
//view the dataType
console.table([ DataNum, DataNum1])
 if (DataNum === DataNum1){
// datatype is true that condition is trigger 
     console.log(val1+ val2);
}else {
    console.log("invalid input");

}
   }
   CheckIfNumber(55 , "fdfd");




//    difference between Global Variable and Scope variable 
  let GlobalVar= 100;
   function ScopeOfVariable(){
     let ScopeVar = 40;
     console.log(GlobalVar + ScopeVar);
   }
ScopeOfVariable();
// Local scope only working on local

//    console.log(GlobalVar + ScopeVar);
var reverseWord= "This is my pen."
function ReverseSentence(){

    var wordRe= reverseWord.split(" ");
    var reverseWor= wordRe.reverse();
let WordOutput = "";
    for ( let x in reverseWor){
   WordOutput += wordRe[x] + " ";
    }
 console.log(WordOutput)
 console.log(wordRe[3] + wordRe[2] + wordRe[1] + wordRe[0]);

}
ReverseSentence();

function Person(firstName, age){
    this.firstname = firstName;
    this.age = age;

}
Person.prototype.greet = function (){
    console.log(`my name is ${this.firstname} and  ${this.age} year old`)
}

var person1 = new Person("JAtin" , 15);
console.log(person1.greet())
///Create araray 
let myData = ["Statemnt", "AArray", "Oobject"];
 let myData1= myData.push("1" , "Hey");
 console.log(myData)
 console.log(myData1)



//  trigger dom Event

console.log(Date());

let dateOF = new Date("2023 , 5 , 4");

console.log(dateOF)
function TextChanger(){
var text  = document.querySelector("h1");
text.innerHTML = "Hey I am Buttons";
text.style.backgroundColor = "green";

}

let  createDiv = ()=>{
    document.createElement("div").innerHTML = "hellow"
}
let getMyid = document.getElementById("sid").setAttribute("class" , "test");
let getMyidClas = document.getElementById("sid").getAttribute("class");

console.log(getMyidClas);
// class User {
//     constructor(user , email, password){
//         this.username  = user;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return ``
//     }
// }

///dom evts
 
let myDivId= document.querySelector(".parent");
console.log(myDivId.children[2].innerHTML)

for (let i = 0; i < myDivId.children.length; i++) {
  console.log(myDivId.children[i].innerHTML);
    
}


const div= document.createElement("div");
div.className = "myDiv" ;
div.setAttribute("id" , "myDivId");
div.style.background= "red";
 let addText = document.createTextNode("chai and code");
 div.appendChild(addText);

 document.body.appendChild(div);


 function addLanguage(addlang){
    const weekName = document.createElement("li");
    weekName. = `${addlang}`;
    myDivId.appendChild(weekName);
 }
 addLanguage("Firday");

 