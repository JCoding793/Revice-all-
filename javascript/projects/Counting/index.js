let valueDisplay = document.querySelectorAll(".num");

let interval = 5000;

valueDisplay.forEach((valueCounter)=>{
    let start = 0;
    let endvlue = parseInt(valueCounter.getAttribute("data-val"));
    console.log(endvlue);
    console.log(valueCounter);
    let counter = Math.floor(interval / endvlue)
    let myCoutner = setInterval(function (){
    console.log(start)
    start++;
    valueCounter.innerHTML = start;
    if(start == endvlue){
        clearInterval(myCoutner);
    }
  
} , counter)
})
  