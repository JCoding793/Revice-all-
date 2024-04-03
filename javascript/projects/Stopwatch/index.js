let [milliseconds, seconds , minutes , hours] = [0 ,0 ,0 ,0]
let timeRef = document.querySelector(".timerDisplay");
let myContainer = document.querySelector(".myContainer");
let roundBall = document.querySelector(".round-ball");
let startTimer = document.getElementById("startTimer");
let pauseTimer = document.getElementById("pauseTimer");
let restTimer = document.getElementById("resetTimer");


//defind variable

myContainer.addEventListener("mousemove" , function(move){
  let xMove = `${move.pageX - 30}px`;
  let yMove = `${move.pageY + 10}px`;
  roundBall.style.transform = `translate(${xMove}, ${yMove})`;
})

let init; 

startTimer.addEventListener("click" , ()=>{
    init = setInterval(displayTimer , 10);

})
pauseTimer.addEventListener("click" , ()=>{
    clearInterval(init)
})
restTimer.addEventListener("click" , ()=>{
    clearInterval(init);
    [milliseconds, seconds , minutes , hours] = [0 ,0 ,0 ,0]
    timeRef.innerHTML = "00 : 00 : 00 : 000";
})
//create function 

function displayTimer() {
milliseconds += 10;
if(milliseconds == 1000){
    milliseconds = 0;
    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;

        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    }
}
let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes : minutes 
let s = seconds < 10 ? "0" + seconds : seconds 
let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}

