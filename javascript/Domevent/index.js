let myContainer = document.querySelector(".myContainer");

let mybuttons = document.querySelectorAll(".button");
let myArray = ["grey", "black", "blue", "yellow"];
let form = document.querySelector("form");
let locaTim = document.querySelector("#local");
let guesBtn= document.querySelector("#subguess");
let guesField= document.querySelector("#guessField");
let guesss= document.querySelector("#guesss");
let guesPreview= document.querySelector("#previeGuess");
let guesRemain= document.querySelector("#guessRemain");
let startOver= document.querySelector("#guessstart");

///

let prevGuess = [];
let numGuess = 1;
let playGame = true;
const p = document.createElement("p");
let randomNumber = parseInt(Math.random() * 100 +1 )
console.log(randomNumber)
if(playGame){
    guesBtn.addEventListener("click" , function(e){
      e.preventDefault();
      const guess = parseInt(guesField.value);
      console.log(guess);
      validateGuess(guess)
    })
}
function validateGuess(guess){
 if (isNaN(guess)){
    console.log("please enter the valid")
 }else if (guess < 1 ){
    console.log("Please ener a number more than 1 ");
 }else if (guess > 100){
    console.log("Please ener a number less than 100 ");

 }else{
    prevGuess.push(guess);
    if(numGuess === 11){
        displayGuess(guess)
       displayMessage(`Game over Randum number was ${randomNumber} `);
       endGame()
    }else {
        displayGuess(guess);
        checkGuess(guess)
    }
 }
}
function checkGuess(guess){
if (guess === randomNumber){
  displayMessage("You Guessed it right");
  endGame("")
}else if(guess < randomNumber){
displayMessage( `Number is too Low`)
}else if (guess > randomNumber){
displayMessage( `Number is too Hight`)

}
}
function displayGuess(guess){
  guesField.value = "";
  guesss.innerHTML += `${guess} ` ;
  numGuess ++;
  guesRemain.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){

}


function endGame(){
  guesField.value = "";
  guesField.setAttribute('disabled' ,"");
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(){
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click" , function (){
    randomNumber = parseInt(Math.random() * 100 +1 )
    prevGuess = [];
    numGuess = 1;
    guesRemain.innerHTML = `${11 - numGuess}`;
    guesField.removeAttribute("disabled");
    startOver.removeChild(p) ;
    playGame = true;
  })
}





 let myGuessForm = document.querySelector("#guessForm");
console.log(parseInt(Math.random() * 100 + 1));
setInterval(function (){
locaTim.innerHTML = new Date().toLocaleTimeString();
} , 1000)
form.addEventListener("submit" , (e)=>{
    e.preventDefault();
   const height =  parseInt(document.querySelector("#height").value);
   const weight =  parseInt(document.querySelector("#weight").value);
   const result = document.querySelector("#result");
   
   console.log(height , weight , result)
     if(height === "" || isNaN(height) || height < 0 ){
        result.innerHTML = "Please Provid Valid Information";
     }else if(weight === "" || isNaN(weight) || weight < 0 ){
        result.innerHTML = "Please Provid Valid Information";
     }else {
//toFixed only show 2 charactrer
     const bmi=    (weight / ((height * height)/1000)).toFixed(2)
        result.innerHTML = `<span style= color: "green", font-size: "20px">${bmi}</span>`
     }
});


mybuttons.forEach(function (btn) {
  //  for (let i = 0; i < myArray.length; i++) {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "gray") {
      myContainer.style.background = "pink";
    } else if (e.target.id === "red") {
      myContainer.style.background = "red";
    } else if (e.target.id === "blue") {
      myContainer.style.background = "blue";
    } else if (e.target.id === "green") {
      myContainer.style.background = "green";
    }
  });


});




///event propogation 
