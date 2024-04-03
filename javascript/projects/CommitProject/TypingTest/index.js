const quoteApiRul = "https://api.quotable.io/random?minLength=100&maxLength=140";
const qutoSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");

let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;



//display random 
const renderNewQuote = async()=>{
   const response = await fetch(quoteApiRul);

//    storedata
let data = await response.json();

quote = data.content;
//array of data 

let arr = quote.split("").map(value =>{
    //wrap the chartacts in a span tag
    
    return "<span class='quote-chars'>"+ value +"</span>"
})
qutoSection.innerHTML += arr.join(""); 
console.log(quote)
}
//logic for camper work with quote

userInput.addEventListener("input" , ()=>{
    let quteChars = document.querySelectorAll(".quote-chars");

    quteChars = Array.from(quteChars);
    console.log(quteChars);

    let userInputChars = userInput.value.split("");


    quteChars.forEach((char , index)=>{
          
        if(char.innerText == userInputChars[index]){
            char.classList.add("success");
        }else if (userInputChars[index] == null){
            if(char.classList.contains("success")){
                char.classList.remove("success")
            }else{
                char.classList.remove("fail");
            }
        }else{
            if(!char.classList.contains("fail")){
                mistakes += 1;
                char.classList.add("fail");

            }
            document.getElementById("mistakes").innerText = mistakes;
        }


        let check = quteChars.every((element) =>{
            return element.classList.contains("success")
        })
        if(check){
            console.log("ok")
            displayResult();
        }
    })
})
const startTest = ()=>{
    mistakes = 0;
    timer = "";
    userInput.disabled = false;
    reduseTimer();
    document.getElementById("start-test").style.display = "none";
    document.getElementById("stop-test").style.display = "block";
}

function updateTimer (){
    if(time == 0){
        displayResult();
    }else{
        document.getElementById("timer").innerText = --timer + "s";
    }
}
const reduseTimer = ()=>{
    time  = 60;
    timer = setInterval(updateTimer , 1000)
}
const displayResult= ()=>{
document.querySelector(".result").style.display = "block";
document.getElementById("stop-test").style.display = "block"
clearInterval(timer);
document.getElementById("stop-test").style.display = "none";
userInput.disabled = true;
let timeTaken = 1;
if(time !=0){
    timeTaken = (60 -time) / 100;
}
document.getElementById("wpm").innerText = (userInput.value.length / 5 / timeTaken).toFixed(2) + "wpm";
document.getElementById("accuracy").innerText = Math.round(((userInput.value.length - mistakes) / userInput.value.length) * 100) + "%";
}
window.onload = ()=>{
 userInput.value = "";
 document.getElementById("start-test").style.display = "block";
 document.getElementById("stop-test").style.display = "none";
 userInput.disabled = true;
 renderNewQuote();
}